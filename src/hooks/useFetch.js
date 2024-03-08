import { useState, useEffect } from "react";
import { getImages } from "../helpers/getImages";

export const useFetch = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] =  useState(true);

    const getArrayImages = async() => {
        const newImages = await getImages();
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {
        getArrayImages();
    }, [])

    return {
        images,
        isLoading,
    }
}
