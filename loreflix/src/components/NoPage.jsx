import myGIF from '../GIF/404.gif'
import '../Stylesheets/image.css'

// Hier wird einfach ein kleines GIF angezeigt
const NoPage = () => {
    return (
        <div className="gif-container">
            <img src={myGIF} alt="My GIF" width={1080} height={720} className='gif' />
        </div>
    )
}

export default NoPage