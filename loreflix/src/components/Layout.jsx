import { Outlet, Link } from "react-router-dom";
import '../Stylesheets/style.css';

const Layout = () => {
    return (
        <div>
            <nav className="nav">
                <h1 id="title">Loreflix</h1>
                <ul className="nav-links">
                    <li>
                        <Link to="/"><u>Home</u></Link>
                    </li>
                    <li>
                        <Link to="/HighestScore"><u>Highest Score</u></Link>
                    </li>
                    <li>
                        <Link to="/Trending"><u>Trending Right now</u></Link>
                    </li>
                    <li>
                        <Link to="/SearchResults"><u>Search Movies</u></Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;
