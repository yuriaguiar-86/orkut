import './Likes.css';

import { AiFillMessage, AiTwotoneLike } from 'react-icons/ai';
import { BsFillEmojiLaughingFill } from 'react-icons/bs';
import { MdStar } from 'react-icons/md';

const Follows = () => {
    const randomNumber = () => {
        return Math.floor(Math.random() * (100 - 80 + 1) + 80);
    }

    return (
        <div className='container_follows'>
            <p>Confiante <span><MdStar /> { randomNumber() }%</span></p>
            <p>Dedicado <span><AiTwotoneLike /> { randomNumber() }%</span></p>
            <p>Resiliente <span><BsFillEmojiLaughingFill /> { randomNumber() }%</span></p>
            <p>Comunicativo <span><AiFillMessage /> { randomNumber() }%</span></p>
        </div>
    );
}

export default Follows;