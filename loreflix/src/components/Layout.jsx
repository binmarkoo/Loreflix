import { Outlet, Link} from "react-router-dom";
import '../Stylesheets/style.css';

const Layout = () => {
    return (
        <div>
            <nav className="nav">
                <h1 id="title">Loreflix</h1>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/HighestScore">Highest Score</Link>
                    </li>
                    <li>
                        <Link to="/Trending">Trending right now</Link>
                    </li>
                    <li>
                        <Link to="/SearchResults">Search Movies</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;
