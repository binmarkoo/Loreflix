import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Trending from './components/Trending'
import HighestScore from './components/HighestScore'
import Layout from './components/Layout'
import NoPage from './components/NoPage'
import SearchResults from './components/SearchResults'
import CardContent from './components/CardContent'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="trending" element={<Trending />} />
          <Route path="highestscore" element={<HighestScore />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="content" element={<CardContent />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
