import './Logout.css';

import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setToken }) => {
    const history = useNavigate();

    const credentials = JSON.parse(localStorage.getItem('token'));

    const handleClickLogout = () => {
        return fetch(`http://localhost:8765/users/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: credentials.username,
                password: credentials.password
            })
        })
        .then((res) => {
            res.json()
        })
        .then((data) => {
            localStorage.clear();
            setToken('');
            history('/', { state: { message: data }})
        });
    }

    return (
        <p className='logout' onClick={ handleClickLogout }>Sair <FiLogOut /></p>
    );
}

export default Logout;