import myGIF from '../GIF/404.gif'
import '../Stylesheets/image.css'

const NoPage = () => {
    return(
        <div className="gif-container">
            <img src={myGIF} alt="My GIF" width={1080} height={720} className='gif'/>
        </div>
    )
}

export default NoPage