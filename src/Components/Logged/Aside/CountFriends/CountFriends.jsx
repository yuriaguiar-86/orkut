import './CountFriends.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CountFriends = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch(`http://localhost/orkut/users/countUsers }`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => setCount(data));
    }, []);

    return (
        <section className="container__count__friends">
            <h4>Amigos ({ count })</h4>
            <p><Link to='/friends'>Ver todos</Link></p>
        </section>
    );
}

export default CountFriends;