const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");
var fetchUser = require("../middleware/fetchUser");

// ROUTE 1 : Fetch all the Notes using : GET "/api/notes/fetchnotes"
router.get("/fetchnotes", fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(400).send("Internal Server Error : unable to fetch notes");
    }
});

// ROUTE 2 : Add new Notes using : POST "/api/notes/addnote"
router.post(
    "/addnote",
    fetchUser,
    // Validating notes details using express-validator
    [
        body("title", "Title must be atleast 3 characters.").isLength({
            min: 3,
        }),
        body(
            "description",
            "Description must be atleast 5 characters."
        ).isLength({ min: 5 }),
    ],
    async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            // If there are errors, Send a bad request.
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const note = new Notes({
                title,
                description,
                tag,
                user: req.user.id,
            });

            const savedNote = await note.save();
            res.json(savedNote);
        } catch (error) {
            console.error(error.message);
            res.status(500).send(
                "Internal Server Error : unable to create note"
            );
        }
    }
);

module.exports = router;
