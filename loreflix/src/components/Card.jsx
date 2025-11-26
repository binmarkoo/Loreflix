import '../Stylesheets/cardStyle.css'

const Card = ({ imgSrc, title, onClick }) => {

    return (
        <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="card-info">
                <img src={imgSrc} alt={title} style={{ width: '100%', height: '100%', borderRadius: '.7rem' }} />
            </div>
        </div>
    )
}

export default Card