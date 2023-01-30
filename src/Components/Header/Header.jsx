import './Header.css';

import logo from '../../images/logo.png';
import disc from '../../images/orkut-disc.png';
import Logout from './Logout/Logout';
import Options from './Options/Options';

const list = [
    { name: 'Início', to: '' }, { name: 'Perfil', to: '/profile' }, { name: 'Recados', to: '#'}, 
    { name: 'Amigos', to: '/friends' }, { name: 'Comunidades', to: '#' }, { name: 'Aplicativos', to: '#'}
];

const Header = ({ user, setToken }) => {
    return (
        <header className='container__header'>
            <div className='options'>
                <img src={ disc } alt="Logo disc" className='logo__mobile' />
                <img src={ logo } alt="Logo" />
                <Options list={ list } />
            </div>
            
            <input type="text" placeholder='Pesquisar no Orkut' className='input__search' />

            <Logout username={ user } setToken={ setToken } />
        </header>
    );
}

export default Header;