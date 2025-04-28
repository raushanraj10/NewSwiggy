import { useState } from "react";


const SearchBar=()=>{
    const [searchres,setres]=useState([]);
    return(
        <div id="searchBar">
            <input type ="text" value={searchres} onChange={(ele)=>setres(ele.target.value)} ></input>
            <button onClick={()=>{
                console.log(searchres);
            }}>Search</button>
            <button id="top">Top Reated</button>
        </div>
    )

}
export default SearchBar;