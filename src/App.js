import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Reservations from './pages/reservations/Reservations';



function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/reservations' element={<Reservations />} />
    </Routes>
    </>
  );
}

export default App;
