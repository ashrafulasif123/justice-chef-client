import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import ChefRecipes from './components/ChefRecipes.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Blog from './components/Blog.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chef-auth-server-ashrafulasif123.vercel.app/chef')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/chefrecipe/:id',
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-auth-server-ashrafulasif123.vercel.app/chef/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
