import { Link } from "react-router";
import { NAV_URL } from "../Utiles/constant";
import { useState } from "react";
import useOnlineStatus from "../Utiles/useOnlineStatus";

const NavBar=()=>{
  const [buttontab,setbutton]=useState("Login")
  const onlinestatus=useOnlineStatus();
  return (
    <div id = "Nav">
      <div> 
       <img id="image" src={NAV_URL}></img>
      </div>
      <div id="icons">
         <h1 id ="statuscheck">{onlinestatus?"🛜":"🌐"} </h1>
        <Link id="ab" className="a" to='/'>Home</Link>
        <Link className="a" to='/myorder'>MyOrder</Link>
        <Link className="a" to='cart'>Cart</Link>
        <Link className="a" to='/contact'>Contact</Link>
        <Link className="a" to='/about'>About</Link>
        <button id="bottontab" onClick={()=>{buttontab==="Login"?setbutton("Logout"):setbutton("Login")}}>{buttontab}</button>
      </div>
    </div>
    )
}
export default NavBar;