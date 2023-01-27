import './Likes.css';

const movies = ['As vantagens de ser invível', 'Harry Potter', 'Tropa de Elite'];

const Movies = () => {
    return (
        <p className='list__likes'>
            { movies.map((movie) => (
                <span>{ movie }</span>
            ))}
        </p>
    );
}

export default Movies;