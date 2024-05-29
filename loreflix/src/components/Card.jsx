import '../Stylesheets/cardStyle.css'

const Card = ({ imgSrc, title }) => {
 return(
    <div class="card">
        <div class="card-info">
            {imgSrc ? (
                <img src={imgSrc} alt={title} style={{ width: '100%', height: '100%', borderRadius: '.7rem' }} />
            ) : (
                <h1 className="title">{title}</h1>
            )}
        </div>
    </div>
 )
}

export default Card