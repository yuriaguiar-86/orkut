import './InfoUser.css';

const InfoUser = ({ props }) => {
    return (
        <>
            {
                props.map((user) => (
                    <div className="info__user" key={ user.id }>
                        <p>#{ user.id } <span>{ user.name }</span></p>
                        <p></p>
                    </div>
                ))
            }
        </>
    );
}

export default InfoUser;