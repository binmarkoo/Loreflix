import getTrendingMovies from "../Backend/MovieService"
import '../Stylesheets/style.css'

const Homepage = () => {
    getTrendingMovies()
    return(
        <div>
            <h1>Startpage</h1>
            <div class="button-container">
                <button class="button">button3</button>

                <button class="button">button4</button>
                <button class="button">button3</button>

                <button class="button">button4</button>
            </div>
        </div>
    )
}

export default Homepage