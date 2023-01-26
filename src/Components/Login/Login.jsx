import './Login.css';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsApple, BsLinkedin } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation } from 'react-router-dom';

import Authentication from '../Form/Authentication/Authentication.jsx';
import Input from '../Form/Input/Input.jsx';
import SubmitButton from '../Form/SubmitButton/SubmitButton.jsx';
import Messages from '../Layout/Messages/Messages.jsx';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const location = useLocation();
    let message = '';
  
    if(location.state) {
      message = location.state.message;
    }

    async function login(credentials) {
        return fetch(`http://localhost:8765/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then((data) => data.json());
    }

    const handleUsernameChange = (e) => {
        return setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        return setPassword(e.target.value);
    }

    const handleSubmit = async e => {
        sessionStorage.clear();
        e.preventDefault();

        const token = await login({ 
            username, 
            password 
        });

        setToken(token);
    }

    return (
        <>
            { message && <Messages message={ message } /> }

            <div className="login__register">    
                <h2>Entre com o seu e-mail</h2>
                <p>E veja o que seus amigos estão fazendo!</p>

                <form onSubmit={ handleSubmit }>
                    <Input type='email' name='username' placeholder='Email' onChange={ handleUsernameChange } />
                    <Input type='password' name='password' placeholder='Senha' onChange={ handlePasswordChange } />

                    <p className='rescue__pass'><Link to='/forgetPassword'>Esqueceu a sua senha?</Link></p>

                    <SubmitButton value='Entrar' />
                </form>

                <p>Ainda não se cadastrou? <Link to='/register'>Cadastre-se aqui</Link></p>

                <fieldset><legend>Ou entre com o seu e-mail</legend></fieldset>

                <div className="social__media">
                    <Authentication icon={ <FcGoogle /> } socialMedia='Google' />
                    <Authentication icon={ <BsLinkedin /> } socialMedia='LinkedIn' />
                    <Authentication icon={ <BsApple /> } socialMedia='Apple' />
                </div>
            </div>
        </>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
}

export default Login;