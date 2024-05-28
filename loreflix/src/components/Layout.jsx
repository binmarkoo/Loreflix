import { Outlet, Link } from "react-router-dom";
import '../Stylesheets/style.css'

const Layout = () => {
    return (
        <div>
            {/* <nav>
                <h2>Loreflix</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/HighestScore">Highest Score</Link>
                    </li>
                    <li>
                        <Link to="/Trending">Trending Movies</Link>
                    </li>
                    <li>
                        <Link to="/SearchMovies">Search Movies</Link>
                    </li>
                </ul>
            </nav> */}
            <nav class="nav">
                <h1>Loreflix</h1>
                {/* <a href="#" class="logo">CodingLab</a> */}
                <ul class="nav-links">
                <li>
                        <Link to="/">Home</Link>
                </li>
                <li>
                        <Link to="/HighestScore">Highest Score</Link>
                </li>
                <li>
                        <Link to="/Trending">Trending Movies</Link>
                </li>
                <li>
                        <Link to="/SearchMovies">Search Movies</Link>
                </li>
                </ul>
                <div class="search-box">
                    <input type="text" placeholder="Search here..." />
                </div>
            </nav>

            <Outlet />
        </div>
    )
}

export default Layout