import photo from '../../../images/photo.jpg';

import './AboutUser.css';

const AboutUser = () => {
    return (
        <section className='container__about__user'>
            <img src={ photo } alt="Foto perfil" />

            <div className='container__data'>
                <h4>Yuri Aguiar</h4>
                <p>Masculino, solteiro</p>
                <p>Brasil</p>
            </div>

            <hr />
            <div className='container__data'>
                <p>Adicionar</p>
                <p>Denunciar</p>
            </div>

            <hr />
            <div className='container__data'>
                <p>Perfil</p>
                <p>Recados</p>
                <p>Galeria</p>
                <p>Depoimentos</p>
                <p>Aplicativos</p>
            </div>
        </section>
    );
}

export default AboutUser;