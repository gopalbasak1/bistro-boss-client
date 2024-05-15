import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home/Home";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])


export default Routes;