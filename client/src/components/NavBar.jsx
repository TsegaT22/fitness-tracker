import { Link } from 'react-router-dom';

const NavBar = () => {
    const navStyle = {
        display: 'flex',
        gap: '20px',
        padding: '10px',
        borderBottom: '1px solid #ccc',
        marginBottom: '20px',
    };

    return (
        <nav style={navStyle}>
            <Link to="/">Home</Link>
            <Link to="/add">Add Workout</Link>
            <Link to="/progress">View Workout Progress</Link>
        </nav>
    );
}
export default NavBar;