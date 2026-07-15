const User = require("../models/User");
const bcrypt = require("bcrypt");

const registerUser = async(req, res) => {
    try{
        //check if all fields are provided
        const {name, email, password} = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }
        
        //check for any existing user
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(409).json({
                message: "User already exists"
            });
        }
        
        //generate hashed password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create new user
        const user = await User.create({
            name,
            email,
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
        console.error(err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    registerUser
};