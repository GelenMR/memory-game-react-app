import { useContext, useState } from 'react';
import Context from '../context/StaticContext';
import PropTypes from 'prop-types';

export const UserNameInput = ({ onNewUser }) => {
    const { setNotStarted } = useContext(Context);
    const [inputValue, setInputValue] = useState(localStorage.getItem('USER_NAME') ? localStorage.getItem('USER_NAME') : '');

    const onChange = ({ target }) => setInputValue(target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewUser(inputValue.trim());
        setInputValue('');
        setNotStarted(false);
    }

    return (
        <form onSubmit={onSubmit} className='p-1' aria-label='form'>
            <p className=' text-slate-950 mb-6'>
                Hola, bienvenido al juego de memoria!<br />
                Descubre las parejas iguales para acertar. Ingresa o verifica tu nombre para iniciar una nueva partida.
            </p>
            <input type='text' className='font-mono text-base py-1 px-3 w-min md:w-72 mb-8 rounded opacity-85' placeholder='Introduce tu nombre aquí' value={inputValue} onChange={onChange} />
            <div>
                <button className='bg-yellow-600 hover:bg-yellow-500 hover:border-current font-semibold transition-all' onClick={onSubmit}>Iniciar Partida</button>
            </div>
        </form>
    )
}

UserNameInput.propTypes = {
    onNewUser: PropTypes.func.isRequired
}