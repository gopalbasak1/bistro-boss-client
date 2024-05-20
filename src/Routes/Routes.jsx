import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRotes from "./PrivateRotes";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";

const Routes = createBrowserRouter([

    //side bar
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'menu',
                element: <Menu/>
            },
            {
                path: 'order/:category',
                element: <Order/>
            },
            {
                path: 'login',
                element: <Login/>,
            },
            {
                path: 'signup',
                element: <SignUp/>
            },
            {
                path: 'secret',
                element: <PrivateRotes>
                    <Secret/>
                </PrivateRotes>
            }
        ]
    },

    //Dashboard Content
    {
        path: 'dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: 'cart',
                element: <Cart/>
            }
        ]
    }
])


export default Routes;