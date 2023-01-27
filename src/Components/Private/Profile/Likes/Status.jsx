import './Likes.css';

const status = [
    { title: 'Relacionamento', value: 'Solteiro' },
    { title: 'Quem sou eu', value: 'Jovem em busca de conexões com pessoas apaixonadas por programação/tecnologia!' },
    { title: 'País', value: 'Brasil' },
];

const Status = () => {
    return (
        <>
            {
                status.map((prop) => (
                    <div className='container__values'>
                        <p>{ prop.title }</p>
                        <p>{ prop.value }</p>
                    </div>
                ))
            }
        </>
    );
}

export default Status;