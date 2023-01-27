import './AboutUser.css';

import { BiBlock } from 'react-icons/bi';
import { FiUser, FiUserPlus } from 'react-icons/fi';
import { GrGallery } from 'react-icons/gr';
import { IoGameControllerOutline } from 'react-icons/io5';
import { MdOutlineLocalPostOffice, MdOutlineMessage } from 'react-icons/md';

import photo from '../../../images/photo.jpg';
import Actions from '../Actions/Actions';

const optionOne = [
    { name: 'Adicionar', to: '', icon: <FiUserPlus /> }, { name: 'Denunciar', to: '', icon: <BiBlock /> }
];

const optionTwo = [
    { name: 'Perfil', to: '/profile', icon: <FiUser /> }, { name: 'Recados', to: '', icon: <MdOutlineLocalPostOffice /> }, 
    { name: 'Galeria', to: '', icon: <GrGallery /> }, { name: 'Depoimentos', to: '', icon: <MdOutlineMessage /> }, 
    { name: 'Aplicativos', to: '', icon: <IoGameControllerOutline /> }
];

const AboutUser = () => {
    return (
        <section className='container__about__user'>
            <div className='container__data'>
                <img src={ photo } alt="Foto perfil" />
                <h4>Yuri Aguiar</h4>
                <p>Dev Full Stack</p>
                <p>Brasil</p>
            </div>

            <hr />
            <Actions list={ optionOne } />

            <hr />
            <Actions list={ optionTwo } />
        </section>
    );
}

export default AboutUser;