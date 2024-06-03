/*import React, { useEffect, useState } from 'react';
import getResultByID from '../Backend/FindByIDService';
import Card from './Card';*/

const CardContent = (/*{ id }*/) => {
    
    /* const [Result, setResult] = useState([]);

    useEffect((id) => {
        const fetchResultByID = async () => {
            const data = await getResultByID(id);
            if (data && data.results) {
                setResult(data.results);
            }
        };
        
        fetchResultByID();
    }, []) */

    return (
        <div className="content-container">
            {/*<div className="cardContainer">
                {Result.map((object) => {
                    <Card 
                        key={object.id}
                        imgSrc={`https://image.tmdb.org/t/p/w500${object.poster_path}`}
                        title={object.title}
                    />
                })}
            </div>*/}
            <h2>hs</h2>
        </div>
    )
}

export default CardContent