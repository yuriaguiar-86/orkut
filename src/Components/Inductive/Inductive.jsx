import './Inductive.css';

import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';

import logo from '../../images/logo.png';
import Footer from '../Baseboard/Footer.jsx';
import Button from '../Button/Button.jsx';

const Inductive = () => {
    return (
        <section className="containers container__downloads">
            <img src={ logo } alt="Logo" />

            <div className="container__text">
                <h2>A rede social mais queridinha está de volta!</h2>
                <p>Mande depoimentos e recados para os seus amigos e interaja com eles da forma como se fazia antes!</p>
                
                <p className="download__in">Disponível em:</p>

                <div className="container__links">
                    <Button icon={ <FaGooglePlay /> } />
                    <Button icon={ <FaAppStoreIos /> } />
                </div>
            </div>

            <Footer />
        </section>
    );
}

export default Inductive;