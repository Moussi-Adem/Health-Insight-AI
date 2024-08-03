import React from "react";
import Login from "./Pages/Auth/Login.jsx";
import SignUp from "./Pages/Auth/SignUp.jsx";
import Presentation from "../src/Pages/Presentation.jsx";
import Home from "./Pages/Home.jsx"; 
import Services from "./Pages/Services.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Profile from "./Pages/Profile.jsx";
import AuthContext from "./Pages/Auth/AuthContext.jsx"
import Protected from "./Pages/Auth/Protected.jsx";
import ChatBot from "./Components/ChatBot.jsx";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";



function App() {

  const router = createBrowserRouter([ 
    {
      path:'/', element: <Presentation />,
    },
    {
      path:'/Presentation', element: <Presentation />,
    },
    {
      path:'/SignUp', element: <SignUp />,
    },
    {
      path:'/LogIn', element: <Login />,
    },
    {
      path:'/Home', element: <Protected><Home /></Protected> ,
    },
    {
      path:'/Home', element: <Protected><ChatBot /></Protected> ,
    },
    {
      path:'/Services', element: <Protected><Services /></Protected> ,
    },
    {
      path:'/AboutUs', element: <Protected><AboutUs /></Protected> ,
    },
    {
      path:'/ContactUs', element: <Protected><ContactUs /></Protected> ,
    },
    {
      path:'/Profile', element: <Protected><Profile /></Protected> ,
    },
  ])


  return (
    <AuthContext>
    <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  )
}

export default App
