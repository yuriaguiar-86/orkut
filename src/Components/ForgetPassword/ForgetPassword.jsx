import { Link } from 'react-router-dom';

import Input from '../Form/Input/Input.jsx';
import SubmitButton from '../Form/SubmitButton/SubmitButton.jsx';

const ForgetPassword = () => {
    return (
        <div className="login__register">    
            <h2>Recuperar senha</h2>
            <p>Será enviado uma notificação ao e-mail cadastrado!</p>

            <form>
                <Input type='email' placeholder='Email' className='input' />

                <SubmitButton value='Recuperar senha' />
            </form>

            <p>Já possui cadastro? <Link to='/'>Entrar</Link></p>
        </div>
    );
}

export default ForgetPassword;