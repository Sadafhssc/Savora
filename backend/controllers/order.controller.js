import { Order } from "../models/order.model.js";
import Stripe from "stripe";
import User from "../models/user.model.js";

const stripe = new Stripe(process.env.STRIPE_SECRET);

// ================= PLACE ORDER =================

export const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5173";

    try {
        const newOrder = new Order({
            userId: req.user.id,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });

        await newOrder.save();

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }));

        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: 5 * 100,
            },
            quantity: 1,
        });

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: "payment",

            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,

            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        return res.send({
            success: true,
            session_url: session.url,
        });

    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};


// ================= VERIFY ORDER =================

export const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;

    try {
        if (success === "true") {

            const order = await Order.findByIdAndUpdate(
                orderId,
                {
                    payment: true,
                },
                {
                    new: true,
                }
            );

            if (!order) {
                return res.send({
                    success: false,
                    message: "Order not found",
                });
            }

            // Clear cart only after successful payment
            await User.findByIdAndUpdate(order.userId, {
                cart: [],
            });

            return res.send({
                success: true,
                message: "Paid",
            });

        } else {

            await Order.findByIdAndDelete(orderId);

            return res.send({
                success: false,
                message: "Not Paid",
            });
        }

    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};


// ================= GET USER ORDERS =================

export const getOrders = async (req, res) => {
    try {

        const orders = await Order.find({
            userId: req.user.id,
        }).sort({
            createdAt: -1,
        });

        if (!orders || orders.length === 0) {
            return res.send({
                success: false,
                message: "No orders found",
            });
        }

        return res.send({
            success: true,
            orders,
        });

    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};


// ================= GET ALL ORDERS FOR ADMIN =================

export const getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find({}).sort({
            createdAt: -1,
        });

        if (!orders || orders.length === 0) {
            return res.send({
                success: false,
                message: "No orders found",
            });
        }

        return res.send({
            success: true,
            orders,
        });

    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};


// ================= UPDATE ORDER STATUS =================

export const updateOrderStatus = async (req, res) => {
    try {

        const { orderId, status } = req.body;

        const order = await Order.findByIdAndUpdate(
            orderId,
            {
                status,
            },
            {
                new: true,
            }
        );

        if (!order) {
            return res.send({
                success: false,
                message: "Order not found",
            });
        }

        return res.send({
            success: true,
            message: "Order status updated",
            order,
        });

    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};