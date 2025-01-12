import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './Views/Home'
import Detail from './Views/Detail';
import Adddetails from './Views/Adddetails';
import PageNotFound from './Views/PageNotFound';
import UpdateInfo from './Views/UpdateInfo';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/detail/:id",
    element: <Detail />
  },
  {
    path: "/Adddetails",
    element: <Adddetails />
  },
  {
    path: "/edit/:id",
    element:<UpdateInfo/> 
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);



