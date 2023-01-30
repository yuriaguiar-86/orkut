import './Profile.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Bio from './Likes/Bio';
import Books from './Likes/Books';
import Follows from './Likes/Follows';
import Movies from './Likes/Movies';
import Musics from './Likes/Musics';
import Status from './Likes/Status';
import Loading from '../../Layout/Loading/Loading';

const Profile = () => {
    const [profile, setProfile] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('token'));

        setTimeout(() => {
            fetch(`http://localhost/orkut/users/profile?id=${ data.token.replace(/["]/g, '') }`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setProfile(data)
                setLoading(true); 
            });
        }, 2000);
    }, []);

    return (
        <>
            { !loading && <Loading /> }
            {
                loading && (
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
                )
            }
        </>
    );
}

export default Profile;