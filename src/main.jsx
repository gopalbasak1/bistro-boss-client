import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
   <div className='w-full mx-auto'>
    <RouterProvider router={Routes} />
    </div>
   </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>,
)
