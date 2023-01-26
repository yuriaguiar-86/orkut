import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../Form/Input/Input.jsx';
import SubmitButton from '../Form/SubmitButton/SubmitButton.jsx';

const Register = () => {
    const history = useNavigate();
    const [users, setUsers] = useState([]);

    async function createUser(datas) {
        return fetch(`http://localhost:8765/users/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
        .then((res) => res.json())
        .then((data) => history('/login', { state: { message: data }}));
    }

    const handleSubmitAdd = async e => {
        e.preventDefault();
        createUser(users);
    }

    const handleChange = (e) => {
        setUsers({...users, [e.target.name]: e.target.value});
    }

    return (
        <>
            <div className="login__register">    
                <h2>Cadastre-se</h2>
                <p>E veja o que seus amigos estão fazendo!</p>

                <form onSubmit={ handleSubmitAdd }>
                    <Input type='text' name='name' onChange={ handleChange } placeholder='Nome e sobrenome' className='input' />
                    <Input type='email' name='email' onChange={ handleChange } placeholder='Email' className='input' />
                    <Input type='tel' name='personal_phone' onChange={ handleChange } placeholder='(99) 99999-9999' className='input' />
                    <Input type='password' name='password' onChange={ handleChange } placeholder='Senha' className='input' />
                    <Input type='password' name='confirm_password' placeholder='Confirmar senha' className='input' />

                    <SubmitButton value='Cadastrar' />
                </form>

                <p>Já possui cadastro? <Link to='/'>Entrar</Link></p>
            </div>
        </>
    );
}

export default Register;