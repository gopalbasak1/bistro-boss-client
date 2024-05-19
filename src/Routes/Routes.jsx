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

const Routes = createBrowserRouter([
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
    }
])


export default Routes;