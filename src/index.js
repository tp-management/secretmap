import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import ScrollToTop from './scrollToTheTop';
import { ShopContextProvider } from './contextAPI/shopContext/ShopContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
