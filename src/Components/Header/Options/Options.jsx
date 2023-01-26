import { Link } from 'react-router-dom';
import './Options.css';

const Options = ({ list }) => {
    return (
        <nav className="container__options">
            <ul>
                {
                    list.map((option) => (
                        <li key={ option.name } ><Link to={ option.to }>{ option.name }</Link></li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Options;