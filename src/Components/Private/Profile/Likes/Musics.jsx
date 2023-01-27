import './Likes.css';

const musics = ['John Mayer', 'Scorpions', 'Link Park', 'Metálica', 'AC/DC', 'Clayton e Romário', 'Eduardo Costa', 'Zé Neto e Cristiano'];
const Musics = () => {
    return (
        <p className='list__likes'>
            { musics.map((music) => (
                <span>{ music }</span>
            ))}
        </p>
    );
}

export default Musics;