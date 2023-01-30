import './Friends.css';

import { useEffect, useState } from 'react';

import Loading from '../../Layout/Loading/Loading';
import InfoUser from './InfoUser/InfoUser';

const Friends = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:8765/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(true);
            });
        }, 2000);
    }, []);

    return (
        <>
            { !loading && <Loading /> }
            {
                loading && (
                    <section className='container__friends__list'>
                        <InfoUser props={ users } />
                    </section> 
                )
            }
        </>
    );
}

export default Friends;