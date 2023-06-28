import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Movies from './pages/Movies';
import News from './pages/News';
import Users from './pages/Users';
import InfoMovie from './pages/Movies/infoMovie';
import InfoNews from './pages/News/infoNews';
import Home from './pages/Home';

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/info-movie/:id" element={<InfoMovie />} />
                <Route path="/info-news/:id" element={<InfoNews />} />
                <Route path="/news" element={<News />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    )
}