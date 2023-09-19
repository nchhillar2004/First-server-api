// Imports
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
var fetchUser = require("../middleware/fetchUser");

// ROUTE 1 : Create a new user using : POST "/api/auth/register"
router.post(
    "/register",
    // Validating user details using express-validator
    [
        body("name", "Name must be atleast 3 characters.").isLength({ min: 3 }),
        body("email", "Invalid email address.").isEmail(),
        body("password", "Password must be atleast 8 characters.").isLength({
            min: 8,
        }),
    ],
    async (req, res) => {
        // If there are errors, Send a bad request.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Check weather user with this email already exists
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({
                    error: "Sorry a user with this email already exists.",
                });
            }

            // Encrypting password using "bcrypt"
            const salt = await bcrypt.genSalt(10);
            const securedPassword = await bcrypt.hash(req.body.password, salt); // hashing passwords

            // Create a new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securedPassword,
            });

            const data = {
                user: {
                    id: user.id,
                },
            };
            const authToken = jwt.sign(data, jwtSecret); // Signing the user unique id/token with my jwt_secret

            // Response JSON = Showing sucess staus and authToken
            res.json({ Status: "Successfully create User.", authToken });

            // Catching errors (If any..)
        } catch (error) {
            console.error(error.message);
            res.status(500).send(
                "Internal Server Error : unable to register user"
            );
        }
    }
);

// ROUTE 2 : Authenticating\Logging In using : POST "/api/auth/login"
router.post(
    "/login",
    // Validating Logging In details using express-validator
    [
        body("email", "Invalid email address.").isEmail(),
        body("password", "Password cannot be blank.").exists(),
    ],

    async (req, res) => {
        // If there are errors, Send a bad request.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res
                    .status(400)
                    .json({ error: "Please try to login with correct email." });
            }

            let passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                return res
                    .status(400)
                    .json({
                        error: "Please try to login with correct password.",
                    });
            }

            const data = {
                user: {
                    id: user.id,
                },
            };
            const authToken = jwt.sign(data, jwtSecret); // Signing the user unique id/token with my jwt_secret

            // Response JSON = Showing sucess staus and authToken
            res.json({ Status: "Successfully logged in.", authToken });

            // Catching errors (If any..)
        } catch (error) {
            console.error(error.message);
            res.status(500).send(
                "Internal Server Error : unable to loggin user"
            );
        }
    }
);

// ROUTE 3 : Get details of Logged in user using : POST "/api/auth/getuser". Logged in Required
router.post("/getuser", fetchUser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password"); // Select\fetch all details of user except "password"
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send(
            "Internal Server Error : unable to fetch user details"
        );
    }
});

module.exports = router;
