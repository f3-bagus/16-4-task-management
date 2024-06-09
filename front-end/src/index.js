// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
 // Import Switch, Redirect, and BrowserRouter as Router


import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

// layouts
import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth.js";

// views without layouts
import Landing from "./views/Landing.js";
import Profile from "./views/Profile.js";
import Index from "./views/Index.js";

ReactDOM.render(
  <Router>
    <Routes>
      {/* add routes with layouts */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/auth" element={<Auth />} />
      {/* add routes without layouts */}
      <Route path="/landing" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Index />} />
      {/* add redirect for first page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
