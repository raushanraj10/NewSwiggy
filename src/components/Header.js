import { Link } from "react-router";
import { NAV_URL } from "../Utiles/constant";

const NavBar=()=>{
  return (
    <div id = "Nav">
      <div> 
       <img id="image" src={NAV_URL}></img>
      </div>
      <div id="icons">
        <Link id="ab" className="a" to='#'>Home</Link>
        <Link className="a" to='#'>MyOrder</Link>
        <Link className="a" to='#'>Cart</Link>
        <Link className="a" to='#'>Contact</Link>
        <Link className="a" to='#'>About</Link>
      </div>
    </div>
    )
}
export default NavBar;