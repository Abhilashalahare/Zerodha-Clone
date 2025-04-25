import UserModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ success: false, message: "Missing details" });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.json({ success: true, token, user: { name: user.name } });

    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({ success: false, message: "Email and Password are required" })
    }

    try {

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: 'Invalid Email' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            res.json({ success: true, token, user: { name: user.name } });
        } else {
            return res.json({ success: false, message: "Invalid Password" });
        }

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};

export const logout = async (req, res) => {
    res.clearCookie('token');

    // Still send a success response to allow frontend logout even with no cookies
    return  res.json({ success: true, message: "Logged out successfully" });
}

