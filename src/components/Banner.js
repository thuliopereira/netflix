import React, { useEffect } from "react";
import "./Banner.css";
import categorias, { getMovies } from "../Api";

function Banner() {
    const [movie, setMovie] = React.useState({});
    const fetchRandomMovie = async () => {
        try {
            const netflixOriginalsCategoria = categorias.find((categorias) => categorias.name === "netflixOriginals");
            const data = await getMovies(netflixOriginalsCategoria.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);
        } catch (error) {
            console.log("Banner Error: ", error);
        }
    }

    useEffect(() => {
      fetchRandomMovie();
    }, []);
    

    function truncate(str, n){
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }

    return (
        <header
        className="banner-container"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            rubyPosition: "center-center",
        }}
        >  
            <div className="banner-content">
                <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner-button-container">
                    <button className="banner-button">Assistir</button>
                    <button className="banner-button">Minha Lista</button>
                </div>
                <div className="banner-description">
                    <h2>{truncate(movie?.overview, 150)}</h2>
                </div>

            </div>


        </header>
    );
}

export default Banner;