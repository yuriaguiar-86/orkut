import './SubmitButton.css';

const SubmitButton = ({ value }) => {
    return (
        <input type='submit' className='input__submit' value={ value } />
    );
}

export default SubmitButton;