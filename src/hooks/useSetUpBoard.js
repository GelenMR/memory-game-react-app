/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export const useSetUpBoard = () => {
    const { images, isLoading } = useFetch();
    const [notStarted, setNotStarted] = useState(true);
    const [messyImages, setMessyImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
	const [coincidences, setCoincidences] = useState(0);
	const [errors, setErrors] = useState(0);
    const [tries, setTries] = useState(0);

    const [difficulty, setDifficulty] = useState(12);
	const [levelGame, setLevelGame] = useState(difficulty);

    const [finished, setFinished] = useState(false);
    const [message, setMessage] = useState('');
    
    const shuffleCards = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[random]] = [arr[random], arr[i]];
        }
        return arr;
    }

    const setUpBoard = (difficult = levelGame) => {
        const duplicateImages = images.slice(0, difficult).flatMap(img => {
			const duplicate = {
				...img,
				id: Math.random(),
			}
			return [img, duplicate]
		});

		if (duplicateImages?.length > 0) {
            const newCards = shuffleCards(duplicateImages)
			setMessyImages([...newCards]);
        }
        setSelectedImages([]);
        setCoincidences(0);
        setErrors(0);
        setTries(0);
    }
    
    const handleShowImage = (idImg) => {
        const isExist = selectedImages.find((item) => item.idImg === idImg);
        const matched = messyImages[idImg].state;
        if (selectedImages.length < 2 && !isExist && matched===0) {
            setSelectedImages([...selectedImages, {
            title: messyImages[idImg].title,
            idImg
            }])
            const prevArray = [...messyImages]
            prevArray[idImg].state = 1;
            setMessyImages(prevArray);
        }
    }

    useEffect(() => {
		if (selectedImages.length === 2) {
			setTries(tries + 1);
			if (selectedImages[0].title === selectedImages[1].title) {
				setSelectedImages([]);
                setCoincidences(coincidences + 1);
                if (messyImages.every(card => card.state === 1)) {
                    setTimeout(() => {
                        setMessage(`FELICIDADES ${localStorage.getItem('USER_NAME')}!!! Haz finalizado el juego en ${tries + 1} intentos.`);
                        setFinished(true);
                    }, 1000);
                    
                } 
			} else {
				setTimeout(() => {
					selectedImages.map(obj => {
						const tempArray = [...messyImages];
						tempArray[obj.idImg].state = 0;
						setMessyImages(tempArray);
                        setSelectedImages([]);
                        setErrors(errors + 1);
					});
				}, 1000);
			}
		}
    }, [selectedImages]);

    const resetCards = () => {
        setFinished(false);
        setCoincidences(0);
        setErrors(0);
        setTries(0);
		setNotStarted(true);
        shuffleCards(messyImages).map((obj, i) => {
			const tempArray = [...messyImages];
			tempArray[i].state = 0;
			setMessyImages(tempArray);
		});
    }
    
    useEffect(() => {
		setUpBoard();
	}, [isLoading]);

    return {
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
    }
}
