import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from './Card';
import { getShowBySearch } from '../Backend/TVShowService';
//import '../Stylesheets/searchResultsStyle.css';

const SearchResults = () => {
    const [results, setResults] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query'); //input from searchbar

    useEffect(() => {
        const fetchShowBySearch = async () => {
            const data = await getShowBySearch(1, query);
            if (data && data.results) {
                setResults(data.results);
            }
        };

        if (query) {
            fetchShowBySearch();
        }
    }, [query]); //Dependency Array bedeutet wenn query sich ändert wird useEffect nochmal aufgerufen

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
    );
};

export default SearchResults;
