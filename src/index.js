import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from './components/Users';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouteProvider,
  Route,
  RouterProvider,
  Navigate,
  Routes,
  Redirect
} from "react-router-dom";
import Home from './components/Home';
import SideBar from './components/sideBar';
import ErrorPage from './components/error-page';

const router = createBrowserRouter([

  {
    path: "/", element: <SideBar/>,
    errorElement: < ErrorPage />,
  
    children: [
      
      {
       
         path: "/",
         element: <Home />,

        
      },
    {
      
      path: "/User",
      element: <User />
    },
  {
      
    path: "/home",
    element: <Home />,

   
 },
    ],
  }
  
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
reportWebVitals()