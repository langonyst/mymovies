import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Movies from './pages/Movies';
import News from './pages/News';
import Users from './pages/Users';

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/movies" element={<Movies />} />
                <Route path="/news" element={<News />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    )
}