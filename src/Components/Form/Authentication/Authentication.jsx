import './Authentication.css';

const Authentication = ({ icon, socialMedia }) => {
    return (
        <button className='btn__social__media'>
            { icon } Entrar com { socialMedia }
        </button>
    );
}

export default Authentication;