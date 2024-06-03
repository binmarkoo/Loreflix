import '../Stylesheets/cardStyle.css'

const Card = ({ imgSrc, title }) => {

    return (
        <div className="card">
            <div className="card-info">
                <img src={imgSrc} alt={title} style={{ width: '100%', height: '100%', borderRadius: '.7rem' }} />
            </div>
        </div>
    )
}

export default Card