import './Header.css';

import logo from '../../images/logo.png';
import Options from './Options/Options';
import Logout from './Logout/Logout';

const list = [
    { name: 'Início', to: '' }, { name: 'Perfil', to: '/profile' }, { name: 'Recados', to: ''}, 
    { name: 'Amigos', to: '/friends' }, { name: 'Comunidades', to: '' }, { name: 'Aplicativos', to: ''}
];

const Header = () => {
    return (
        <header className='container__header'>
            <div className='options'>
                <img src={ logo } alt="Logo" />
                <Options list={ list } />
            </div>
            
            <input type="text" placeholder='Pesquisar no Orkut' className='input__search' />

            <Logout />
        </header>
    );
}

export default Header;