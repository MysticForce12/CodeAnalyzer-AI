const baseCookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
};

const cookieOptions = {
    ...baseCookieOptions,
    maxAge: 24*60*60*1000, 
};

module.exports = {baseCookieOptions, cookieOptions};