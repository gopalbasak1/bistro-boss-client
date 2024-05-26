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
import AllUsers from "../Layouts/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";

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
        element: <PrivateRotes>
            <Dashboard/>
        </PrivateRotes>,
        children: [
            //normal user routes
            {
                path: 'cart',
                element: <Cart/>
            },


                // admin only routes
                
            {
                path: 'addItems',
                element: <AdminRoute>
                    <AddItems/>
                </AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute>
                    <ManageItems></ManageItems>
                </AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute>
                    <UpdateItem/>
                </AdminRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: 'users',
                element: <AdminRoute>
                    <AllUsers/>
                </AdminRoute>
            },


        ]
    }
])


export default Routes;