import './Likes.css';

import { AiFillMessage, AiTwotoneLike } from 'react-icons/ai';
import { BsFillEmojiLaughingFill } from 'react-icons/bs';
import { MdStar } from 'react-icons/md';

const Follows = () => {
    return (
        <div className='container_follows'>
            <p>Confiante <span><MdStar /> 85%</span></p>
            <p>Dedicado <span><AiTwotoneLike /> 100%</span></p>
            <p>Resiliente <span><BsFillEmojiLaughingFill /> 100%</span></p>
            <p>Comunicativo <span><AiFillMessage /> 70%</span></p>
        </div>
    );
}

export default Follows;