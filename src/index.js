import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './navbar/Navbar';
import routesProf from './routes/routesProf';
import routesEleve from './routes/routesEleve';

const rootRoutes = [
  {
    path: "/",
    element: (
      <div>
        <Navbar />
      </div>
    )
  },
];

const router = createBrowserRouter([
  ...rootRoutes,
  ...routesProf,
  ...routesEleve
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
