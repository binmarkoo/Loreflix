import { Outlet, Link, useNavigate } from "react-router-dom"
import React, { useState } from 'react'
import '../Stylesheets/style.css'

const Layout = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search?query=${searchQuery}`)
            //navigate('/search')
        }
    }

    const goToHome = () => {
        navigate('/')
    }

    return (
        <div>
            <nav className="nav">
                <h1 id="title" onClick={goToHome}>Loreflix</h1>
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
                    {/* <li>
                        <Link to="/SearchResults"><u>Search Movies</u></Link>
                    </li> */}
                    <li>
                        <input class="searchbar" id="searchbar" placeholder="Search for movies and shows"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearch} />
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout
