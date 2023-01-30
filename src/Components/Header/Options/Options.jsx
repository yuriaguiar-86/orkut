import './Options.css';

import { Link } from 'react-router-dom';

const listResponsive = [
    { name: 'Início', to: '' }, { name: 'Perfil', to: '/profile' }, { name: 'Amigos', to: '/friends' }
];

const Options = ({ list }) => {
    return (
        <nav className="container__options">
            <ul className='desktop'>
                {
                    list.map((option) => (
                        <li key={ option.name } ><Link to={ option.to }>{ option.name }</Link></li>
                    ))
                }
            </ul>

            <ul className='mobile'>
                {
                    listResponsive.map((option) => (
                        <li key={ option.name } ><Link to={ option.to }>{ option.name }</Link></li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Options;