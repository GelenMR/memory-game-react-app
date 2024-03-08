import { useContext } from 'react';
import { UserNameInput } from './index';
import Context from '../context/StaticContext';

export const InitBoard = () => {
    const { notStarted, setNotStarted } = useContext(Context);
    const onAddUserName = (name) => {
        localStorage.setItem('USER_NAME', name);
    }
    
    return (
        notStarted &&
        <div className='fixed w-[100%] h-[100vh] z-10 bg-[rgba(0,0,0,0.5)] flex top-0 left-0 justify-center items-center'>
            <div className='relative p-8 rounded-xl bg-[rgba(255,255,255,0.8)] w-min md:w-[500px]  text-xl font-semibold'>
                <UserNameInput onNewUser={onAddUserName} setNotStarted={setNotStarted} />
            </div>
        </div>
    )
}
