var jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

const fetchUser = (req, res, next) => {
    // get user from JWT Token and add id to re object

    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({
            error: "Please authenticate using a valid token",
        });
    }

    try {
        const data = jwt.verify(token, jwtSecret);
        req.user = data.user;
        next();
    } catch (error) {
        console.error(error.message);
        res.status(401).send({
            error: "Please authenticate using a valid token",
        });
    }
};

module.exports = fetchUser;
