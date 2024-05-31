import getTrendingMovies from "../Backend/MovieService"
import getTrendingShows from "../Backend/TVShowService";
import React, { useEffect, useState } from 'react';
import '../Stylesheets/style.css'
import '../Stylesheets/homepageStyle.css'
import Card from './Card'

const Homepage = () => {
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    
    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const data = await getTrendingMovies();
            if (data && data.results) {
                setMovies(data.results);
            }
        };
        
        fetchTrendingMovies();
    }, []);

    useEffect(() => {
        const fetchTrendingShows = async () => {
            const data = await getTrendingShows();
            if (data && data.results) {
                setShows(data.results);
            }
        };
        
        fetchTrendingShows();
    }, []);
    return(
        <div className="homepageContainer">
            <div className="trending-section">
                <div className="trendingMovies">
                    <h2 className="trending-title">Trending Movies</h2>
                    <div className="cardContainer">
                        {movies.map((movie) => (
                            <Card 
                                key={movie.id}
                                imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                title={movie.title} 
                            />
                        ))}
                    </div>
                </div>
                <div className="trendingMovies">
                    <h2 className="trending-title">Trending Shows</h2>
                    <div className="cardContainer">
                        {shows.map((show) => (
                            <Card 
                                key={show.id}
                                imgSrc={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                                title={show.title} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage