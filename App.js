import React from "react";
import ReactDOM from "react-dom/client"
import Header from "/src/components/Header"
import Body from "/src/components/Body"
import { createBrowserRouter,RouterProvider } from "react-router";

const App=()=>{
    return (
        <div id ="parent">
          <Header/>
           <Body/>
          {/* <Footer/> */}
        </div>
    )
}

const Route = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    }
])

const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(<RouterProvider router={Route}/>)