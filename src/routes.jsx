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
import AddMovie from './pages/Movies/addMovie';
import UpdateMovie from './pages/Movies/updateMovie';
import AddNews from './pages/News/addNews';
import UpdateNews from './pages/News/updateNews';
import InfoUser from './pages/Users/infoUser';
import UpdateUser from './pages/Users/updateUser';
import AddUser from './pages/Users/addUser';

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/info-movie/:id" element={<InfoMovie />} />
                <Route path="/add-movie/" element={<AddMovie />} />
                <Route path="/update-movie/:id" element={<UpdateMovie />} />
                <Route path="/news" element={<News />} />
                <Route path="/info-news/:id" element={<InfoNews />} />
                <Route path="/add-news/" element={<AddNews />} />
                <Route path="/update-news/:id" element={<UpdateNews />} />
                <Route path="/users" element={<Users />} />
                <Route path="/info-user/:id" element={<InfoUser />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/update-user/:id" element={<UpdateUser />} />
            </Routes>
        </Router>
    )
}