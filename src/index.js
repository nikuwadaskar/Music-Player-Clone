import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
// import Carousel from './Carousel';
// eslint-disable-next-line
// import "swiper/css/bundle";
// import "./styles.css";

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

