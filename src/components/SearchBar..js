import { useState } from "react";


const SearchBar=(props)=>{
    const {filteredRes,listcard,setfilteredRes}=props
    const [searchres,setres]=useState([]);
    return(
        <div id="searchBar">
            <input id="in" type ="text" value={searchres} onChange={(ele)=>setres(ele.target.value)} ></input>
            <button onClick={()=>{

                setfilteredRes(listcard.filter((elem)=>elem.card.card.info.name.toLowerCase().includes(searchres.toLowerCase())))
               
            }}>Search</button>
            <button id="top" onClick={()=>{
                setfilteredRes(listcard.filter((ele)=>ele.card.card.info.avgRating>4))
            }}
                
           >Top Reated</button>
        </div>
    )

}
export default SearchBar;