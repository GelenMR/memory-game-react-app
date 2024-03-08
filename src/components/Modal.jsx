import { Fragment, useContext } from 'react';
import Context from '../context/StaticContext';

// eslint-disable-next-line react/prop-types
export const Modal = ({ cerrar }) => {
    const {
        setUpBoard,
        setLevelGame,
        difficulty,
        setDifficulty,
    } = useContext(Context);
    
    const styles = 'p-1 my-2 border-2 rounded-md cursor-pointer';
    const stylesSelected = 'bg-[#646cffaa] text-white border-transparent font-medium cursor-default';

    const generateOptions = (pairs) => {
        const isSelected = difficulty === pairs;
        return (
            <span
                className={`${styles} ${isSelected && stylesSelected}`}
                onClick={() => {
                    if(difficulty!==pairs){
                        setDifficulty(pairs)
                        setLevelGame(pairs)
                        setUpBoard(pairs)
                    }
                    cerrar()
                }}
            >
                {pairs} pares
            </span>
        )
    }

    return (
        <div className='bg-[rgba(255,255,255,0.8)] w-[110px] h-auto absolute top-10 right-0 rounded shadow-2xl z-[10]'>
            <span className='flex flex-col my-1'>
                <p className='font-bold uppercase text-center my-2'>Dificultad</p>
                <hr className='border' />
                <span className='flex flex-col items-center my-1'>
                    {[6, 9, 12, 16, 20].map((pairs, i) =>
                        <Fragment key={i}>
                            {generateOptions(pairs)}
                        </Fragment>
                    )}
                </span>
            </span>
        </div>
    )
}
