import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from './Card'
import Modal from './Modal'
import { getShowBySearch } from '../Backend/TVShowService'
import { getMovieBySearch } from '../Backend/MovieService'
import '../Stylesheets/searchStyle.css'

const SearchResults = () => {
    const [results, setResults] = useState([])
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query')
    const [selectedItem, setSelectedItem] = useState(null)
    const [selectedType, setSelectedType] = useState(null)
    const pagecount = 1

    const handleCardClick = (item, type) => {
        setSelectedItem(item)
        setSelectedType(type)
    }

    const closeModal = () => {
        setSelectedItem(null)
        setSelectedType(null)
    }

    useEffect(() => {
        const fetchBySearch = async () => {
            const combinedResults = []
            for (let page = 1; page <= pagecount; page++) {
                const data = await getShowBySearch(1, query);
                const data2 = await getMovieBySearch(1, query);
                if (data && data.results) {
                    combinedResults.push(...data.results.map(item => ({ ...item, type: 'tv' })))
                }
                if (data2 && data2.results) {
                    combinedResults.push(...data2.results.map(item => ({ ...item, type: 'movie' })))
                }
            }

            // Nur Ergebnisse mit Poster behalten und nach Relevanz sortieren:
            // primär Popularität, bei Gleichstand die Anzahl der Stimmen.
            const sortedResults = combinedResults
                .filter(item => item.poster_path)
                .sort((a, b) => {
                    const popDiff = (b.popularity || 0) - (a.popularity || 0)
                    if (popDiff !== 0) return popDiff
                    return (b.vote_count || 0) - (a.vote_count || 0)
                })

            setResults(sortedResults)
        }

        if (query) {
            fetchBySearch()
        }
    }, [query])

    return (
        <div className="searchResultsContainer">
            <h2 className="results-title">Search Results for "{query}"</h2>
            <div className="cardContainer">
                {results.map((item) => (
                    <Card
                        key={`${item.type}-${item.id}`}
                        imgSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        title={item.title || item.name}
                        onClick={() => handleCardClick(item, item.type)}
                    />
                ))}
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

export default SearchResults