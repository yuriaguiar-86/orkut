import './Input.css';

const Input = ({ type, name, placeholder, onChange }) => {
    return (
        <input 
            autoComplete='off'
            className='input'
            type={ type } 
            name={ name }
            placeholder={ placeholder } 
            onChange={ onChange }
        />
    );
}

export default Input;