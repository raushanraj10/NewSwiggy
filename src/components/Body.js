import { useState,useEffect } from "react";
import { Cardapi } from "../Utiles/constant";
import { CardapiType } from "../Utiles/constant";
import Shimmer from "./Shimmer";
import RestaurantCardList from "./RestaurantCardList";
import { Link } from "react-router";
import SearchBar from "./SearchBar.";
import useOnlineStatus from "../Utiles/useOnlineStatus";
 const RestroCard=()=>{

  const status=useOnlineStatus();
    const [listcard,setlistcard]=useState([]);
 const [filteredRes,setfilteredRes]=useState([]);
    useEffect(()=>{fetchData()},[]);


    const fetchData= async ()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59430&lng=85.13520&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
      const json = await data.json();
     setlistcard(json.data.cards.filter((ele,ind)=>ind>2))
     setfilteredRes(json.data.cards.filter((ele,ind)=>ind>2))
      
    }

    if(listcard.length===0)
        return <Shimmer/>
        console.log("/restaurant/"+ listcard[5].card.card.info.id)

    if(!status)
      return (<h1>no internet connection </h1>)

    return(
      <div>
      <SearchBar listcard={listcard} filteredRes={filteredRes} setfilteredRes={setfilteredRes}></SearchBar>
      <div id="cardsdesign">
      
    {
    filteredRes.map((elem)=><Link key={elem.card.card.info.id} to={"/restaurant/"+ elem.card.card.info.id}><RestaurantCardList  resdata={elem}/></Link>)
    }
    </div>
    </div>
    )
}
export default RestroCard;