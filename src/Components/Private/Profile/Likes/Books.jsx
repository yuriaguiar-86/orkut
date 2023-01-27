import './Likes.css';

const books = ['As vantagens de ser invível', 'A metamorfose'];

const Books = () => {
    return (
        <p className='list__likes'>
            { books.map((book) => (
                <span>{ book }</span>
            ))}
        </p>
    );
}

export default Books;