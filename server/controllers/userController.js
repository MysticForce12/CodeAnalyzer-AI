const {baseCookieOptions} = require("../utils/cookieOptions");

const getCurrentUser = (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user
    });

};

const updateCurrentUser = async(req, res) => {
    try{
        const allowedUpdates = ["name",  "email"];
        const updates = Object.keys(req.body);
        const isValidOperation = updates.every((field)=> allowedUpdates.includes(field));
    
        if(!isValidOperation){
            return res.status(400).json({
                success: false,
                message: "One or more fields cannot be updated."
            });
        }

        updates.forEach((field)=>{
            req.user[field] = req.body[field];
        });

        await req.user.save();

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user: req.user
        })

    } catch(err){
        console.error(err);
        if(err.code === 11000){
            return res.status(409).json({
                success: false,
                message: "Email already exists."
            });
        }
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    };
};

const deleteCurrentUser = async(req, res)=>{
    try{
        await req.user.deleteOne();
        res.clearCookie("token", baseCookieOptions);
        return res.status(200).json({
            success: true,
            message: "Account deleted successfully"
        });
    } catch(err){
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {getCurrentUser, updateCurrentUser, deleteCurrentUser};