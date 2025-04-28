import { CardImg_url } from "../Utiles/constant";
const RestaurantCardList=(props)=>{
    const {resdata}=props;
    const {name,cloudinaryImageId,cuisines,avgRating,costForTwo
    }=resdata.card.card.info
    const {deliveryTime}=resdata.card.card.info.sla
    return(
     <div id="card">
      <div>
    <img id ="cardimage" src={CardImg_url+cloudinaryImageId}></img>
      </div>
      <div id="non">
        <h2 className="h">{name}</h2>
        <h3 className="h">{cuisines.join(", ")}</h3>
        <div id="raterstyle">
            <h4 className="h">{avgRating}⭐</h4>
            <h4 className="h">{deliveryTime} min</h4>
        </div>
        <h3 id="rupay"className="h">{costForTwo}</h3>
      </div>
    </div>
    )
}
export default RestaurantCardList;
