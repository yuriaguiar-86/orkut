import { useEffect, useState } from 'react';
import './Friends.css';
import InfoUser from './InfoUser/InfoUser';

const Friends = () => {
    const [users, setUsers] = useState([]);
    
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
            console.log(data);
        });
    }, []);

    return (
        <section className='container__friends__list'>
            <InfoUser props={ users } />
        </section> 
    );
}

export default Friends;