import AddUser from './AddUser';
import './InfoUser.css';

const InfoUser = ({ props }) => {
    return (
        <>
            {
                props.map((user) => (
                    <div className="info__user" key={ user.id }>
                        <img src='https://via.placeholder.com/100' alt="Usuário" className='photo__user' />

                        <div className='container__add'>
                            <p><span>{ user.name }</span></p>
                            <p># { user.id }{ Math.floor(Math.random() * 1000) }</p>
                            <AddUser />
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default InfoUser;