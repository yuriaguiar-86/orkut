import './Logout.css';

const Logout = () => {
    // const history = useNavigate();

    // const handleClickLogout = () => {
    //     return fetch(`http://localhost:8765/users/logout`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         history('/', { state: { message: data }}
    //     )});
    // }

    return (
        <div className="container__logout">
            <p>Yuri Aguiar</p>
            <p className='logout'>Sair</p>
        </div>
    );
}

export default Logout;