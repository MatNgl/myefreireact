import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavbarProf from './navbar/NavbarProf';
import Navbar from './navbar/Navbar';
import NavbarEleve from './navbar/NavbarEleve';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
      </div>
    )
  },
  {
    path: "/prof",
    element: (
      <div>
        <NavbarProf />
        <div>Je suis la page des profs</div>
      </div>
    )
  },
  {
    path: "/eleve",
    element: (
      <div>
        <NavbarEleve />
        <div>Je suis la page des élèves</div>
      </div>
    )
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
