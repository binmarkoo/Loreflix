import { useNavigate } from "react-router-dom";
import '../Stylesheets/cardStyle.css'

const Card = ({ imgSrc, title }) => {
    const navigate = useNavigate()
    
    const showCardContent = () => {
        navigate("/content")
    }

 return(
    <div className="card" onClick={showCardContent}>
        <div className="card-info">
            {imgSrc ? (
                <img src={imgSrc} alt={title} style={{ width: '100%', height: '100%', borderRadius: '.7rem' }}/>
            ) : (
                <h1 className="title">{title}</h1>
            )}
        </div>
    </div>
 )
}

export default Card