import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Reservations from './pages/Reservations'
import './index.css';
import App from './App';

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

    </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

