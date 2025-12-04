import { useState } from 'react';

const API_BASE = "http://localhost:5050";

const AddWorkout = () => {
    const [workoutName, setWorkoutName] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const res = await fetch(`${API_BASE}/workouts`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({
                    workout_name: workoutName,
                    sets: sets ? Number(sets) : null,
                    reps: reps ? Number(reps) : null,
                    weight: weight ? Number(weight) : null,
                }),
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'Failed to add workout');
            }

            setMessage('Workout added successfully!');
            setWorkoutName('');
            setSets('');
            setReps('');
            setWeight('');
        } catch (err) {
            console.error(err);
            setMessage(`Error: ${err.message}`);
        }
    };

    return (
        <div>
            <h2>Add Workout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Workout Name:</label>
                    <input
                        type="text"
                        value={workoutName}
                        onChange={(e) => setWorkoutName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Sets:</label>
                    <input
                        type="number"
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}
                    />
                </div>

                <div>
                    <label>Reps:</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                    />
                </div>

                <div>
                    <label>Weight (lbs):</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>

                <button type="submit" style={{ marginTop: "20px"}}>Save Workout</button>
            </form>
            {message && <p style={{ marginTop: "20px"}}>{message}</p>}
        </div>
    );
};
export default AddWorkout;