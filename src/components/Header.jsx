import { useContext } from 'react';
import Context from '../context/StaticContext';
import { Config } from './Config';

export const Header = () => {
    const { notStarted, coincidences, errors, resetCards } = useContext(Context);

    return (
    <header>
            <h1 className='text-[#646cffaa] hover:hover:scale-100'>Memoria de Animales</h1>
            {!notStarted &&<div className='grid grid-cols-3'>
				
				<>
					<h3 className='col-span-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600 hover:from-pink-400 to bg-yellow-400 transition duration-500 ease-in-out transform hover:-traslate-y-1 hover:scale-100 pl-[20px] text-justify'>
						Aciertos: <code>{coincidences}</code>   -   Errores: <code>{errors}</code>
					</h3>
                    <button className='w-[80%] m-2 bg-yellow-600 hover:bg-yellow-500 hover:border-current font-semibold transition-all min-w-min' onClick={resetCards}>Reiniciar Partida</button>
                    <Config />
				</>
            </div>}
    </header>
    )
}
