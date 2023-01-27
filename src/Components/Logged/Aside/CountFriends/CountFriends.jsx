import './CountFriends.css';

import { Link } from 'react-router-dom';

const CountFriends = () => {
    const count = 289;

    return (
        <section className="container__count__friends">
            <h4>Amigos ({ count })</h4>
            <p><Link to='/friends'>Ver todos</Link></p>
        </section>
    );
}

export default CountFriends;