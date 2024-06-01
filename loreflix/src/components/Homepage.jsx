import getTrendingMovies from "../Backend/MovieService"
import getTrendingShows from "../Backend/TVShowService";
import { getBestRatedMovies } from "../Backend/MovieService";               // Keine Ahnung Warum, aber die geschwungenen Klammern müssen dableiben ^^
import { getBestRatedShows } from "../Backend/TVShowService";
import React, { useEffect, useState } from 'react';
import '../Stylesheets/style.css'
import '../Stylesheets/homepageStyle.css'
import Card from './Card'

const Homepage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [ratedMovies, setRatedMovies] = useState([])
    const [trendingShows, setTrendingShows] = useState([]);
    const [ratedShows, setRatedShows] = useState([])
    
    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const data = await getTrendingMovies();
            if (data && data.results) {
                setTrendingMovies(data.results);
            }
        };
        
        fetchTrendingMovies();
    }, []);

    useEffect(() => {
        const fetchTrendingShows = async () => {
            const data = await getTrendingShows();
            if (data && data.results) {
                setTrendingShows(data.results);
            }
        };
        
        fetchTrendingShows();
    }, []);

    useEffect(() => {
        const fetchRatedMovies = async () => {
            const data = await getBestRatedMovies();
            if (data && data.results) {
                setRatedMovies(data.results);
            }
        };
        
        fetchRatedMovies();
    }, []);

    useEffect(() => {
        const fetchRatedShows = async () => {
            const data = await getBestRatedShows();
            if (data && data.results) {
                setRatedShows(data.results);
            }
        };
        
        fetchRatedShows();
    }, []);

    return(
        <div className="homepageContainer">
            <div className="trending-section">
                <div className="trendingMovies">
                    <h2 className="trending-title"><u>Trending Movies</u></h2>
                    <div className="cardContainer">
                        {trendingMovies.filter((movie, index) => index < 10).map((movie) => (
                            <Card 
                                key={movie.id}
                                imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                title={movie.title} 
                            />
                        ))}
                    </div>
                </div>

                <div className="trendingMovies">
                    <h2 className="trending-title"><u>Trending Shows</u></h2>
                    <div className="cardContainer">
                        {trendingShows.filter((show, index) => index < 10).map((show) => (
                            <Card 
                                key={show.id}
                                imgSrc={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                                title={show.title} 
                            />
                        ))}
                    </div>
                </div>

                <div className="trendingMovies">
                    <h2 className="trending-title"><u>Top Rated Movies</u></h2>
                    <div className="cardContainer">
                        {ratedMovies.filter((movie, index) => index < 10).map((movie) => (
                            <Card 
                                key={movie.id}
                                imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                title={movie.title} 
                            />
                        ))}
                    </div>
                </div>

                <div className="trendingMovies">
                    <h2 className="trending-title"><u>Top Rated Shows</u></h2>
                    <div className="cardContainer">
                        {ratedShows.filter((show, index) => index < 10).map((show) => (
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