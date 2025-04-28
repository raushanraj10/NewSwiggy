import { Link } from "react-router";
import { NAV_URL } from "../Utiles/constant";
import { useState } from "react";

const NavBar=()=>{
  const [buttontab,setbutton]=useState("Login")
  return (
    <div id = "Nav">
      <div> 
       <img id="image" src={NAV_URL}></img>
      </div>
      <div id="icons">
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