const jwt = require('jsonwebtoken');
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({ 
            success: false,
            message: "Unauthorized" 
        });
    }

    let decoded;

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch(err){
        return res.status(401).json({ 
            success: false,
            message: "Unauthorized" 
        });
    }
    
    const user = await User.findById(decoded.userId).select("-password");
    
    if(!user){
        return res.status(401).json({ 
            success: false,
            message: "Unauthorized" 
        });
    }
    
    req.user = user;
    return next();
}

module.exports = authMiddleware;