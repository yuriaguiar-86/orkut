import './Aside.css';

import Comunity from './Comunity/Comunity';
import CountFriends from './CountFriends/CountFriends';

const Aside = () => {
    return (
        <aside className='container__aside'>
            <CountFriends />
            <Comunity />
        </aside>
    );
}

export default Aside;