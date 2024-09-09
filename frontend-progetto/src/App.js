
import scrollToTop from './helpers/scrollToTop';
// import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from 'axios';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Nav from './components/Nav';
import NotFound from './pages/Notfound';
import Contact from './pages/Contact';
import About from './pages/About';
import Team from './pages/Team';
import Reservations from './pages/Reservations';
import Footer from './components/Footer';
import TeamMember from './pages/TeamMember';
import { LOGIN } from './redux/actions';
import { useDispatch } from 'react-redux';
import { useEffect, useState} from 'react';
import GuestRoutes from './pages/GuestRoutes';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;

  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
 const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    axios("/api/user")
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: res.data,
        });
        setIsAdmin(res.data.role === "admin");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoaded(true));
  }, [dispatch]);


  useEffect(() => {
    scrollToTop()
  },[])

if (loaded) {
  return (

    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
     <Route element={<GuestRoutes />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
                  <Route path="/dashboard" element={<UserDashboard />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>
      <Route path='/services' Component={Services}></Route>
      <Route path='/contact' Component={Contact}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/team' Component={Team}></Route>
      <Route path='/team/:id' Component={TeamMember}></Route>
      <Route path='/reservations' Component={Reservations}></Route>
      <Route path='*' Component={NotFound}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

  );
}

}

export default App;

 

