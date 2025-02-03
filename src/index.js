import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './Assets/Styles/Header&Footer.scss';
import './Assets/Styles/Banner.scss';
import './Assets/Styles/quality.scss';
import './Assets/Styles/About.scss';
import './Assets/Styles/Countdown.scss';
import './Assets/Styles/Recent-project.scss';
import './Assets/Styles/Video.scss';
import './Assets/Styles/Service.scss';
import './Assets/Styles/Team.scss';
import './Assets/Styles/Blog.scss';

// bootstrap import link
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// aos link

import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
