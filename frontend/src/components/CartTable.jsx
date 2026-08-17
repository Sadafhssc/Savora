import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import { useNavigate } from "react-router-dom";

const CartTable = () => {
    const { cartItems, removeFromCart } = useContext(AppContext);

    const navigate = useNavigate();

    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        let sum = 0;

        cartItems.forEach((item) => {
            sum += item.foodId.price * item.quantity;
        });

        setSubtotal(sum);
    }, [cartItems]);

    const deliveryFee = cartItems.length ? 5 : 0;

    return (
        <>
            {!cartItems.length ? (
                <h3 className="text-center fw-normal my-5">
                    Cart is Empty
                </h3>
            ) : (
                <div className="container my-5">
                    <table className="table align-middle">
                        <thead className="text-secondary">
                            <tr>
                                <th>Items</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.foodId._id}>
                                    <td>
                                        <img
                                            src={item.foodId.image}
                                            alt={item.foodId.name}
                                            style={{
                                                width: "55px",
                                                height: "55px",
                                                objectFit: "cover"
                                            }}
                                        />
                                    </td>

                                    <td>{item.foodId.name}</td>

                                    <td>
                                        ${item.foodId.price}
                                    </td>

                                    <td>{item.quantity}</td>

                                    <td>
                                        $
                                        {item.foodId.price *
                                            item.quantity}
                                    </td>

                                    <td>
                                        <button
                                            className="btn-close"
                                            onClick={() =>
                                                removeFromCart(
                                                    item.foodId._id
                                                )
                                            }
                                        ></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="row mt-5">
                        <div className="col-md-5">
                            <h2 className="fw-bold mb-4">
                                Cart Totals
                            </h2>

                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>

                                        <td className="text-end">
                                            ${subtotal}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Delivery Fee</td>

                                        <td className="text-end">
                                            ${deliveryFee}
                                        </td>
                                    </tr>

                                    <tr className="fw-bold">
                                        <td>Total</td>

                                        <td className="text-end">
                                            $
                                            {subtotal +
                                                deliveryFee}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <button
                                className="btn text-white px-4 py-2 mt-3 fw-medium"
                                style={{
                                    backgroundColor: "#02ab95",
                                    borderRadius: "4px"
                                }}
                                onClick={() => navigate("/order")}
                            >
                                PROCEED TO CHECKOUT
                            </button>
                        </div>

                        <div className="col-md-6 offset-md-1 my-4">
                            <p className="mb-3 text-secondary fw-normal fs-5">
                                If you have a promo code, Enter it here
                            </p>

                            <form>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control py-2"
                                        placeholder="Promo code"
                                    />

                                    <button
                                        className="btn btn-dark px-5"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartTable;