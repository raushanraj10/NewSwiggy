import { useState,useEffect} from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
const MenuRestroList=()=>{
    const {resId}=useParams();
    console.log(resId)
    const [MenuList,SetMenuList]=useState([]);
    useEffect(()=>{FetchMenu();},[]);
    const FetchMenu= async ()=>{

    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId="+resId+"&catalog_qa=undefined&query=Biryani&submitAction=ENTER")
    const json= await data.json();
   
    console.log(json);
    return (SetMenuList(json.data.cards.filter((ele,ind)=>(ind===2 || ind===4?ele:false))))
      }
    
    if(MenuList.length===0)
    {
        return <Shimmer/>
    }
    console.log(MenuList);
    console.log("ho g")
    const {name,cuisines,cloudinaryImageId}=MenuList[0].card.card.info    
    const {itemCards}=MenuList[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;   
    return(
     <div className="to">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h2>Menu</h2>
       
        <ol>
        {itemCards.map((ele)=><li className="risk" key={ele.card.info.id}>{ele.card.info.name} </li>)}
        </ol>
     </div>
    )
}
export default MenuRestroList;