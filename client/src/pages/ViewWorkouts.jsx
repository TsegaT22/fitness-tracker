import { useEffect, useState } from 'react';

const API_BASE = "http://localhost:5000";

const ViewWorkouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getWorkouts = async () => {
        try {
            const res = await fetch(`${API_BASE}/workouts`);
            const data = await res.json();
            setWorkouts(data);
        } catch (err) {
            console.error("Error fetching workouts:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getWorkouts();
    }, []);

    return (
        <div>
            <h2>History</h2>
            <button onClick={getWorkouts} style={{ marginBottome: "20px"}}>Refresh</button>

            {loading ? (
                <p>Loading workouts...</p>
            ) : workouts.length === 0 ? (
                <p>No workouts logged yet.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Workout Name</th>
                            <th>Sets</th>
                            <th>Reps</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workouts.map((workout) => (
                            <tr key={workout.id}>
                                <td>{workout.date}</td>
                                <td>{workout.workout_name}</td>
                                <td>{workout.sets ?? '-'}</td>
                                <td>{workout.reps ?? '-'}</td>
                                <td>{workout.weight ?? '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
export default ViewWorkouts;