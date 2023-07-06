import React, { useEffect, useState } from 'react'
import { getMovies } from '../Api'
import categorias from '../Api';
import "./Row.css";


function Row({ title, path, isLarge }) {
    const [movies, setMovies] = React.useState([]);
    const servImagens = "https://image.tmdb.org/t/p/original/";
    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path);
            console.log("Data: ", data);
            setMovies(data?.results);
            } catch (error) {
            console.log("fetchMovies error: ", error);
        }
    };

    useEffect(() => {
      fetchMovies(path);
    }, [path]);
    



    return(
        <div className='row-container'>
            <h2 className='row-header'>{title}</h2>
            <div className='row-cards'>
                {movies?.map((movie) => {
                    return (
                        <img className={`movie-card ${isLarge && "movie-card-large"}`} key={movie.id} src={`${servImagens}${movie.poster_path}`} alt={movie.name}></img>
                    )             
                    })}
                

            </div>
        </div>
    )

}

export default Row;