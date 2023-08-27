import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HealthCare from './screens/Healthcare.jsx';
import Home from './components/Home';
import Login from './login';
import Signup from './Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/health' element={<HealthCare />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
