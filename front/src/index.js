import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './screens/Healthcare.jsx'
import HealthCare from './screens/Healthcare.jsx';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/health' element={<HealthCare />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
