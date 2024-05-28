import { Outlet, Link } from "react-router-dom";
//import "../style.css";   

const Layout = () => {
    return (
        <div>
            <nav>
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
            </nav>

            <Outlet />
        </div>
    )
}

export default Layout