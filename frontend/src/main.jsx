import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Admin from "./admin/Admin";
import Layout from "./user/UserLayout";
import Home from "./user/components/Home/Home";
import Browse from "./user/components/Browse/Browse";
import Search from "./user/components/Search/Search"
import About from "./user/components/About/About"
import Login from "./user/components/Login/Login"
import About from "./user/components/GetStarted/GetStarted"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    
    children: [
      {
        path: "",
        element:<Home />
      },
      {
        path:"browse",
        element:<Browse />
      },
      {
        path:"search",
        element:<Search />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "getStarted",
        element: <GetStarted />
      },
      {
        path:"contact",
        element:<Contact />
      }, {
        path: "admin",
        element:<Admin />
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path = '/' element={<Layout />}>
//       <Route path = '' element={<Home />} />
//       <Route path = 'browse' element={<Browse />} />
//       <Route path = 'search' element={<Search />} />
//       <Route path = 'about' element={<About />} />
//       <Route path = 'login' element={<Login />} />
//       <Route path = 'getStarted' element={<GetStarted />} />
//       <Route path = 'contact' element={<Contact />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)