import getTrendingMovies from "../Backend/MovieService"
import React, { useEffect, useState } from 'react';
import '../Stylesheets/style.css'
import '../Stylesheets/homepageStyle.css'
import Card from './Card'

const Homepage = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const data = await getTrendingMovies();
            if (data && data.results) {
                setMovies(data.results);
            }
        };
        
        fetchTrendingMovies();
    }, []);
    return(
        <div className="homepageContainer">
            {/* <h1 style={{position: "absolute"}}>Startpage</h1> */}
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
            <div>
                
            </div>
        </div>
    )
}

export default Homepage