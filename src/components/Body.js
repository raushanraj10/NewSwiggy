import { useState,useEffect } from "react";
import { Cardapi } from "../Utiles/constant";
import { CardapiType } from "../Utiles/constant";
import Shimmer from "./Shimmer";
import RestaurantCardList from "./RestaurantCardList";

const RestroCard=()=>{
    const [listcard,setlistcard]=useState([]);
    console.log("there")
    useEffect(()=>{fetchData()},[]);

    const fetchData= async ()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59430&lng=85.13520&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
      const json = await data.json();
      return (setlistcard(json.data.cards.filter((ele,ind)=>ind>2)))
      
    }
    if(listcard.length===0)
        return <Shimmer/>
        console.log(listcard)
    return(
      <div id="cardsdesign">
    {listcard.map(ele=><RestaurantCardList key={ele.card.card.info.id} resdata={ele}/>)}
    </div>
    )
}
export default RestroCard;