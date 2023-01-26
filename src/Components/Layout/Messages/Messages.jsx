import './Messages.css';

import { useEffect, useState } from 'react';
import { TbMessages } from 'react-icons/tb';

const Messages = ({ message }) => {
    const [visible, setVisible] = useState();

    useEffect(() => {
        if(!message) {
            setVisible(false);
            return;
        }
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <>
            {
                visible && (
                    <div className='container__message'>
                        <p><TbMessages />{ message }</p>
                    </div>
                )
            }
        </>
    );
}

export default Messages;