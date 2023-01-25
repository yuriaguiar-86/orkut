import './Login.css';

import { BsApple, BsLinkedin } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import Authentication from '../Form/Authentication/Authentication.jsx';
import Input from '../Form/Input/Input.jsx';
import SubmitButton from '../Form/SubmitButton/SubmitButton.jsx';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login__register">    
            <h2>Entre com o seu e-mail</h2>
            <p>E veja o que seus amigos estão fazendo!</p>

            <form>
                <Input type='email' placeholder='Email' className='input' />
                <Input type='password' placeholder='Senha' className='input' />

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
    );
}

export default Login;