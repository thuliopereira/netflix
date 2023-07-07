import React, { useEffect, useState } from 'react'
import { getMovies } from '../Api'
import categorias from '../Api';
import "./Row.css";
import ReactPlayer from "react-player";
import movieTrailer from 'movie-trailer';


function Row({ title, path, isLarge }) {
    const [movies, setMovies] = React.useState([]);
    const [trailerUrl, setTrailerUrl] = React.useState("");
    const servImagens = "https://image.tmdb.org/t/p/original/";

    const onClickHandler = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie.title || movie.name || movie.original_name || "")
            .then((url) => {
                setTrailerUrl(url);  
            })   
            .catch((error) => {
                console.log("onclickHAndler: ", error)
            })
        }

    }


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
                        <img className={`movie-card ${isLarge && "movie-card-large"}`}  onClick={() => onClickHandler(movie)} key={movie.id} src={`${servImagens}${movie.poster_path}`} alt={movie.name}></img>
                    )             
                    })}
                

            </div>
            {trailerUrl && <ReactPlayer url={trailerUrl} playing={true} />}
        </div>
    )

}

export default Row;