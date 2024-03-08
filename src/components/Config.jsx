import { useState } from 'react';
import configIcon from './../assets/configuraciones.png';
import { Modal } from './Modal';

export const Config = () => {
    const [openModal, setOpenModal] = useState(false);
    const cerrar = () => setOpenModal(!openModal);

    return (
        <div className='fixed right-7'>
            <img
                src={configIcon}
                loading='lazy'
                alt='configura-dificultad'
                className='cursor-pointer w-[35px] rounded-full'
                onClick={cerrar}
            />
            {openModal&& <Modal cerrar={cerrar} /> }
        </div>
    )
}
