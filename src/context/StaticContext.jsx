import React from 'react';
import { useSetUpBoard } from '../hooks/useSetUpBoard';

const Context = React.createContext({});

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    const {
        notStarted,
        setNotStarted,
        setUpBoard,
        messyImages,
        tries,
        coincidences,
        errors,
        selectedImages,
        handleShowImage,
        finished,
        message,
        resetCards,
        levelGame,
        setLevelGame,
        difficulty,
        setDifficulty,
    } = useSetUpBoard();

  return (
      <Context.Provider value={{
        notStarted,
        setNotStarted,
        setUpBoard,
        messyImages,
        tries,
        coincidences,
        errors,
        selectedImages,
        handleShowImage,
        finished,
        message,
        resetCards,
        levelGame,
        setLevelGame,
        difficulty,
        setDifficulty,
    }}>
      {children}
    </Context.Provider>
  )
}
export default Context