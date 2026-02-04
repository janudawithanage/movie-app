import { createContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavourites = localStorage.getItem('favourites');
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    const addFavourite = (movie) => {
        setFavourites((prevFavourites) => [...prevFavourites, movie]);
    };

    const removeFavourite = (movieId) => {
        setFavourites((prevFavourites) =>
            prevFavourites.filter((movie) => movie.id !== movieId)
        );
    };

    const isFavourite = (movieId) => {
        return favourites.some((movie) => movie.id === movieId);
    };

    return (
        <MovieContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContext;
