import { useEffect, useState } from 'react';
import './Friends.css';

const Friends = () => {
    const [users, setUsers] = useState();
    
    useEffect(() => {
        fetch(`http://localhost:8765/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setUsers(data);
        });
    }, []);

    return (
        <h2>Friends</h2>
    );
}

export default Friends;