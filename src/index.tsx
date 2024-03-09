import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { ParallaxProvider } from 'react-scroll-parallax';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ParallaxProvider>
    <App />
    </ParallaxProvider>
);

