import { getBestRatedMovies } from "../Backend/MovieService";               // Keine Ahnung Warum, aber die geschwungenen Klammern müssen dableiben ^^
import { getBestRatedShows } from "../Backend/TVShowService";
import React, { useEffect, useState } from 'react';
import Card from './Card'
import '../Stylesheets/style.css'
import '../Stylesheets/highestScoreStyle.css'

const HighestScore = () => {
    const [ratedMovies, setRatedMovies] = useState([])
    const [ratedShows, setRatedShows] = useState([])

    const nextPage = () => {
        console.log("hs")
    }

    useEffect(() => {
        const fetchRatedMovies = async () => {
            const data = await getBestRatedMovies(1);
            if (data && data.results) {
                setRatedMovies(data.results);
            }
        };
        
        fetchRatedMovies();
    }, []);

    useEffect(() => {
        const fetchRatedShows = async () => {
            const data = await getBestRatedShows(1);
            if (data && data.results) {
                setRatedShows(data.results);
            }
        };
        
        fetchRatedShows();
    }, []);
    
    return(
            <div className="rating-section">
                <div className="ratedMovies">
                    <h2 className="titles"><u>Best Rated Movies</u></h2>
                    <div className="movie-cards">
                        {ratedMovies.map((movie) => (
                            <div className="cards">
                                <Card 
                                    key={movie.id}
                                    imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                    title={movie.title} 
                                />
                                <div className="card-description">
                                    <h2>{movie.title}</h2>
                                    <h2>Release Date: {movie.release_date.split("-").reverse().join(".")}</h2>
                                    <h2>Rating: {movie.vote_average}</h2>
                                    <h2>Votes: {movie.vote_count}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ratedShows">
                    <h2 className="titles"><u>Best Rated Shows</u></h2>
                    <div className="show-cards">
                        {ratedShows.map((show) => (
                            <div className="cards">
                                <Card 
                                    key={show.id}
                                    imgSrc={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                                    title={show.title}
                                />
                                <div className="card-description">
                                    <h2>{show.name}</h2>
                                    <h2>Release Date: {show.first_air_date.split("-").reverse().join(".")}</h2>
                                    <h2>Rating: {show.vote_average}</h2>
                                    <h2>Votes: {show.vote_count}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={nextPage}>Next Page</button>
            </div>
    )
}

export default HighestScore