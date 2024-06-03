import getTrendingMovies from "../Backend/MovieService"               // Keine Ahnung Warum, aber die geschwungenen Klammern müssen dableiben ^^
import getTrendingShows from "../Backend/TVShowService"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../Stylesheets/style.css'
import '../Stylesheets/highestScoreStyle.css'

const Trending = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingShows, setTrendingShows] = useState([])
    const [page, setPage] = useState(1)

    const nextPage = () => {
        setPage(page + 1)
    }

    const previousPage = () => {
        setPage(page - 1)
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

    // Ich weiß nicht wieso, aber die API responded bei den Trending Movies/Shows bis Page 5 mit entweder 18, 19 oder 20 Stellen im Array.
    // Danach sind es wie gewohnt 20, aber keine Ahnung wieso das so ist. Habs jetzt einfach so stehen lassen.
    return (
        <div className="rating-section">
            <div className="ratedMovies">
                <h2 className="titles"><u>Best Trending Movies</u></h2>
                <div className="movie-cards">
                    {trendingMovies.map((movie) => (
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
                <h2 className="titles"><u>Best Trending Shows</u></h2>
                <div className="show-cards">
                    {trendingShows.map((show) => (
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
                <div className="button-container">
                    {page > 1 && (
                        <button onClick={previousPage} id="pageSwitcher">Previous Page</button>
                    )}
                    <button onClick={nextPage} id="pageSwitcher">Next Page</button>
                </div>
            </div>
        </div>
    )
}

export default Trending