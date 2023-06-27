import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import LogIn from "./Pages/LogIn";
import AboutUs from "./Pages/AboutUs";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/login' element={<LogIn />}/>
            <Route path='/aboutus' element={<AboutUs />}/>

        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
