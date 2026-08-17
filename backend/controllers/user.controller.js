import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";


// ================= REGISTER USER =================

export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check required fields
        if (!username || !email || !password) {
            return res.send({
                success: false,
                message: "All fields are required"
            });
        }

        // Check password length
        if (password.length < 4 || password.length > 18) {
            return res.send({
                success: false,
                message:
                    "Password should be of atleast 4 and atmost 18 characters"
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.send({
                success: false,
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        // Create token
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET
        );

        return res.send({
            success: true,
            message: "User is registered successfully",
            token,
            isAdmin: user.isAdmin || false
        });

    } catch (error) {
        return res.send({
            success: false,
            message: error.message
        });
    }
};


// ================= LOGIN USER =================

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.send({
                success: false,
                message: "Invalid User credentials"
            });
        }

        // Check user's password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.send({
                success: false,
                message: "Invalid User credentials"
            });
        }

        // ================= ADMIN CHECK =================

        let isAdmin = user.isAdmin || false;

        /*
         * ADMIN_PASSWORD is treated as a normal password
         * in the .env file.
         *
         * Example:
         * ADMIN_EMAIL=admin@gmail.com
         * ADMIN_PASSWORD=admin123
         */

        if (
            email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD
        ) {
            isAdmin = true;

            // Save admin status in database
            await User.findByIdAndUpdate(
                user._id,
                {
                    isAdmin: true
                }
            );
        }

        // ================= CREATE TOKEN =================

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET
        );

        // ================= RESPONSE =================

        return res.send({
            success: true,
            message: "Login successful",
            token,
            isAdmin
        });

    } catch (error) {
        return res.send({
            success: false,
            message: error.message
        });
    }
};