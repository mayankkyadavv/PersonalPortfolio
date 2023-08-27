import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Bootstrap Configurations
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
