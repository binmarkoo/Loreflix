import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage';
import Trending from './components/Trending';
import SearchMovies from './components/SearchMovies';
import HighestScore from './components/HighestScore';
import Layout from './components/Layout';
import NoPage from './components/NoPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="trending" element={<Trending />} />
          <Route path="highestscore" element={<HighestScore />} />
          <Route path="searchmovies" element={<SearchMovies />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
