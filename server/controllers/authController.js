const User = require("../models/User");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");
const {baseCookieOptions, cookieOptions} = require("../utils/cookieOptions");

const registerUser = async(req, res) => {
    try{
        //check if all fields are provided
        const {name, email, password} = req.body;

        if(!name?.trim() || !email?.trim() || !password?.trim()){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const normalizedName = name.trim();
        const normalizedEmail = email.trim().toLowerCase();

        if(normalizedName.length < 3){
            return res.status(400).json({
                success: false,
                message: "Name must be at least 3 characters long"
            });
        }

        if(password.length < 6){
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long"
            });
        }

        //check for any existing user
        const existingUser = await User.findOne({
            email: normalizedEmail
        });

        if(existingUser){
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }
        
        //generate hashed password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create new user
        const user = await User.create({
            name: normalizedName,
            email: normalizedEmail,
            password: hashedPassword
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user:{
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch(err){
        if(err.name === "ValidationError"){
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }

        console.error(err);
        
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


const loginUser = async(req, res) => {
    try{
        const {email, password} = req.body;

        if(!email?.trim() || !password){
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const user = await User.findOne({ 
            email: normalizedEmail 
        });

        if(!user){
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const token = generateToken(user._id);

        res.cookie("token", token, cookieOptions);

        const userData = {
            id: user._id,
            name: user.name,
            email: user.email
        }

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user: userData
        });

    } catch(err){
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

const logoutUser = (req, res) =>{
    res.clearCookie("token", baseCookieOptions);
    res.status(200).json({
        success: true,
        message: "User logged out successfully"
    });
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};


