import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "/src/components/Header"
import Body from "/src/components/Body"
import { createBrowserRouter,RouterProvider } from "react-router";
import Cart from "./src/components/Cart";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import MyOrder from "./src/components/MyOrder";
import { Outlet } from "react-router";
import MenuRestroList from "./src/components/MenuRestroList";
import SearchBar from "./src/components/SearchBar.";
// import Grocery from "./src/components/Grocery";

const Grocery=lazy(()=>import("./src/components/Grocery"))

const App=()=>{
    return (
        <div id ="parent">
          <Header/>
         
           <Outlet/>
           
          {/* <Footer/> */}
        </div>
    )
}

const Route = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/myorder",
                element:<MyOrder/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }, 
            {
                path:"/restaurant/:resId",
                element:<MenuRestroList/>
            }, 
            {
                path:"/contact",
                element:<Contact/>
            },  
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>
            },  
        ],  
    }
])

const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(<RouterProvider router={Route}/>)