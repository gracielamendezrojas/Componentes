import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import LogIn from "./Pages/LogIn";
import Register from  "./Pages/Register"
import AboutUs from "./Pages/AboutUs";
import Chat from "./Pages/Chat";
import Profiles from "./Pages/Profile";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/login' element={<LogIn />}/>
            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/chats' element={<Chat />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/profiles' element={<Profiles />}/>

        </Routes>
    </Router>
);

reportWebVitals();
