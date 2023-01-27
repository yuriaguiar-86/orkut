import './Profile.css';

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Musics from './Likes/Musics';
import Movies from './Likes/Movies';
import Books from './Likes/Books';
import Status from './Likes/Status';
import Follows from './Likes/Follows';
import Bio from './Likes/Bio';

const Profile = () => {
    const [profile, setProfile] = useState();

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        fetch(`http://localhost/orkut/users/profile?password=${ token.replace(/["]/g, '') }`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setProfile(data)
            console.log(profile); 
        });
    }, []);

    return (
        <section className='container__profile'>
            <p><Link>Início</Link></p>
            <h2>{ profile?.name }</h2>

            <Bio />
            <Follows />

            <div className='container__status'>
                <Status />

                <div className='container__values'>
                    <p>Banda(s)</p>
                    <Musics />
                </div>

                <div className='container__values'>
                    <p>Filme(s)</p>
                    <Movies />
                </div>

                <div className='container__values'>
                    <p>Livro(s)</p>
                    <Books />
                </div>
            </div>
        </section>
    );
}

export default Profile;