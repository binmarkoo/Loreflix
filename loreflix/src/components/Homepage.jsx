import getTrendingMovies from "../Backend/MovieService"
import '../Stylesheets/style.css'

const Homepage = () => {
    getTrendingMovies()
    return(
        <div>
            <h1>Startpage</h1>
        </div>
    )
}

export default Homepage