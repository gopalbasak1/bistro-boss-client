import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";

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
            }
        ]
    }
])


export default Routes;