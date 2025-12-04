const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/workouts", async (req, res) => {
    try {
        const allWorkouts = await pool.query("SELECT * FROM workouts ORDER BY date DESC, id DESC");
        res.json(allWorkouts.rows);
    } catch (err) {
        console.error("Error fetching workouts:", err.message);
        res.status(500).json({error: "Server Error: Unable to fetch workouts"});
    }
});

app.post("/workouts", async (req, res) => {
    console.log("POST /workouts hit");
    try {
        const {workout_name, sets, reps, weight } = req.body;

        if (!workout_name) {
            return res.status(400).json({ error: "Workout name is required" });
        }

        const newWorkout = await pool.query(
            `INSERT INTO workouts (workout_name, sets, reps, weight)
            VALUES ($1, $2, $3, $4) 
            RETURNING *`,
            [workout_name, sets || null, reps || null, weight || null]
        );

        res.status(201).json(newWorkout.rows[0]);
    } catch (err) {
        console.error("Error adding workout:", err.message);
        res.status(500).json({error: "Server Error: Unable to add workout"});
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});