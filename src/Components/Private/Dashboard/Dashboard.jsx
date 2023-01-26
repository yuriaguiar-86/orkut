import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <h2>Dashboard private</h2>
            <Link to='/profile'>Profile</Link>
        </>
    );
}

export default Dashboard;