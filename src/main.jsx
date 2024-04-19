import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './commponent/ErrorPage.jsx';
import Home from './commponent/Home.jsx';
import Header from './commponent/Header.jsx';
import Root from './commponent/Root.jsx';
import Blog from './commponent/Blog.jsx';
import Service from './commponent/Service.jsx';
import BlogDetaile from './commponent/BlogDetaile.jsx';
import Login from './commponent/Login.jsx';
import Register from './commponent/Register.jsx';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';
import SocialLoginBtn from './commponent/SocialLoginBtn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:"/" ,
        element: <Home></Home>,
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/service",
        element:<Service></Service>
      }
      ,
      {
        path:"/blogs/:id",
        element:<BlogDetaile></BlogDetaile>,
        loader:() => fetch('/blog.json')
      }
      ,
      {
        path:"/login",
        element:<Login></Login>
      }
      ,
      {
        path:"/register",
        element:<Register></Register>
      }
      ,
      {
        path:"/socialLogin",
        element:<SocialLoginBtn></SocialLoginBtn>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
