import { Link } from 'react-router-dom';
import './Actions.css';

const Actions = ({ list }) => {
    return (
        <div className='container__actions'>
            {
                list.map((action) => (
                    <p><Link to={ action.to }>{ action.icon } { action.name }</Link></p>
                ))
            }
        </div>
    );
}

export default Actions;