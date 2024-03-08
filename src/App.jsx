import { ContextProvider } from './context/StaticContext';
import { Header, MemoryBoard, InitBoard } from './components';
import './App.css'

export const App = () => {
    return (
        <ContextProvider>
            <InitBoard />
            <Header />
            <MemoryBoard />
        </ContextProvider>    
    )
}