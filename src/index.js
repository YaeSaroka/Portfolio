import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;800&amp;display=swap" />
<link href="./css/font-awesome/css/all.min.css?ver=1.2.0" rel="stylesheet"></link>
<link href="./css/bootstrap-icons/bootstrap-icons.css?ver=1.2.0" rel="stylesheet"></link>
<link href="./css/bootstrap.min.css?ver=1.2.0" rel="stylesheet"></link>
</>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
