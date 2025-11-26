import getTrendingMovies from "../Backend/MovieService"
import getTrendingShows from "../Backend/TVShowService"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Modal from './Modal'
import '../Stylesheets/style.css'
import '../Stylesheets/highestScoreStyle.css'

const Trending = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingShows, setTrendingShows] = useState([])
    const [page, setPage] = useState(1)
    const [selectedItem, setSelectedItem] = useState(null)
    const [selectedType, setSelectedType] = useState(null)

    const nextPage = () => {
        setPage(page + 1)
    }

    const previousPage = () => {
        setPage(page - 1)
    }

    const handleCardClick = (item, type) => {
        setSelectedItem(item)
        setSelectedType(type)
    }

    const closeModal = () => {
        setSelectedItem(null)
        setSelectedType(null)
    }

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const data = await getTrendingMovies(page)
            if (data && data.results) {
                setTrendingMovies(data.results)
            }
        }

        fetchTrendingMovies()
    }, [page])

    useEffect(() => {
        const fetchTrendingShows = async () => {
            const data = await getTrendingShows(page)
            if (data && data.results) {
                setTrendingShows(data.results)
            }
        }

        fetchTrendingShows()
    }, [page])

    return (
        <div className="rating-section">
            <div className="ratedMovies">
                <h2 className="titles"><u>Best Trending Movies</u></h2>
                <div className="movie-cards">
                    {trendingMovies.map((movie) => (
                        <div className="cards" key={movie.id}>
                            <Card
                                imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                title={movie.title}
                                onClick={() => handleCardClick(movie, 'movie')}
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
                <h2 className="titles"><u>Best Trending Shows</u></h2>
                <div className="show-cards">
                    {trendingShows.map((show) => (
                        <div className="cards" key={show.id}>
                            <Card
                                imgSrc={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                                title={show.name}
                                onClick={() => handleCardClick(show, 'tv')}
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
                <div className="button-container">
                    {page > 1 && (
                        <button onClick={previousPage} id="pageSwitcher">Previous Page</button>
                    )}
                    <button onClick={nextPage} id="pageSwitcher">Next Page</button>
                </div>
            </div>

            {selectedItem && (
                <Modal 
                    item={selectedItem} 
                    type={selectedType} 
                    onClose={closeModal} 
                />
            )}
        </div>
    )
}

export default Trending