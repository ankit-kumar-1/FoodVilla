import { useContext } from "react";
import { IMG_CDN_URL } from "../config";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    locality,
    sla,
    costForTwo
}) => {

    const { user } = useContext(UserContext)
    return (
        <div className=" w-60 h-96 rounded-md m-3 p-3 bg-white hover:shadow-lg hover:bg-pink-100">
            <img className="h-40 w-60 rounded-md object-cover" src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-semibold text-xl">{name}</h2>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{locality}</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{costForTwo}</h4>
            <h5>{avgRating} stars</h5>
            <h5 className=" font-bold">{user.name}</h5>
        </div>

    );
};


export default RestaurantCard;