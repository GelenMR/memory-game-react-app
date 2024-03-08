import { useContext } from "react";
import Context from "../context/StaticContext";


export const FinishedBoard = () => {
    const { message, resetCards } = useContext(Context);

    return (
        <div className='fixed w-[100%] h-[100vh] z-10 bg-[rgba(0,0,0,0.85)] flex top-0 left-0 justify-center items-center'>
            <div className='relative p-8 rounded-xl bg-[rgba(255,255,255,0.8)] w-[400px] h-[220px] text-xl font-semibold'>
                <div className='font-mono text-slate-900 mb-8'>
                    {message}
                </div>
                <button className='bg-yellow-600 hover:bg-yellow-500 hover:border-current font-semibold transition-all' onClick={resetCards}>Nueva Partida</button>
            </div> 
            
        </div>
    )
}
