import React from 'react'
import '../Stylesheets/modalStyle.css'

const Modal = ({ item, type, onClose }) => {
    if (!item) return null

    const isMovie = type === 'movie'
    const title = isMovie ? item.title : item.name
    const releaseDate = isMovie ? item.release_date : item.first_air_date
    const formattedDate = releaseDate ? releaseDate.split("-").reverse().join(".") : 'N/A'

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                <div className="modal-body">
                    <div className="modal-poster">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={title}
                        />
                    </div>

                    <div className="modal-details">
                        <h1 className="modal-title">{title}</h1>

                        <div className="modal-info">
                            <div className="info-item">
                                <span className="info-label">ID:</span>
                                <span className="info-value">{item.id}</span>
                            </div>

                            <div className="info-item">
                                <span className="info-label">Rating:</span>
                                <span className="info-value">{item.vote_average.toFixed(1)}/10</span>
                            </div>

                            <div className="info-item">
                                <span className="info-label">Genre:</span>
                                <span className="info-value">{isMovie ? 'Movie' : 'TV Show'}</span>
                            </div>

                            <div className="info-item">
                                <span className="info-label">State:</span>
                                <span className="info-value">Released</span>
                            </div>

                            <div className="info-item">
                                <span className="info-label">Type:</span>
                                <span className="info-value">{isMovie ? 'Movie' : 'TV'}</span>
                            </div>

                            <div className="info-item">
                                <span className="info-label">Release Date:</span>
                                <span className="info-value">{formattedDate}</span>
                            </div>

                            <div className="info-item">
                                <span className="info-label">Votes:</span>
                                <span className="info-value">{item.vote_count}</span>
                            </div>
                        </div>

                        {item.overview && (
                            <div className="modal-overview">
                                <h3>Overview</h3>
                                <p>{item.overview}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal