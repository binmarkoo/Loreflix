import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from './Card'
import { getShowBySearch } from '../Backend/TVShowService'
import { getMovieBySearch } from '../Backend/MovieService'
import '../Stylesheets/searchStyle.css'

const SearchResults = () => {
    const [results, setResults] = useState([])
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query') //input from searchbar
    const pagecount = 1

    useEffect(() => {
        const fetchBySearch = async () => {
            const combinedResults = []
            for (let page = 1; page <= pagecount; page++) {
                const data = await getShowBySearch(1, query);
                const data2 = await getMovieBySearch(1, query);
                if (data && data.results) {
                    combinedResults.push(...data.results)
                    combinedResults.push(...data2.results)
                }
            }
            setResults(combinedResults)
        }

        if (query) {
            fetchBySearch()
        }
    }, [query]) //Dependency Array bedeutet wenn query sich ändert wird useEffect nochmal aufgerufen

    return (
        <div className="searchResultsContainer">
            <h2 className="results-title">Search Results for "{query}"</h2>
            <div className="cardContainer">
                {results.map((item) => (
                    <Card
                        key={item.id}
                        imgSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        title={item.title || item.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default SearchResults
