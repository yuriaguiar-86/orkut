import { Link } from 'react-router-dom';

import Input from '../Form/Input/Input.jsx';
import SubmitButton from '../Form/SubmitButton/SubmitButton.jsx';

const Register = () => {
    return (
        <div className="login__register">    
            <h2>Cadastre-se</h2>
            <p>E veja o que seus amigos estão fazendo!</p>

            <form>
                <Input type='text' placeholder='Nome e sobrenome' className='input' />
                <Input type='tel' placeholder='(99) 99999-9999' className='input' />
                <Input type='email' placeholder='Email' className='input' />
                <Input type='password' placeholder='Senha' className='input' />
                <Input type='password' placeholder='Confirmar senha' className='input' />

                <SubmitButton value='Cadastrar' />
            </form>

            <p>Já possui cadastro? <Link to='/'>Entrar</Link></p>
        </div>
    );
}

export default Register;