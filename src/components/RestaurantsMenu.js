
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ShimmerEffect from "./ShimmerEffect"

const RestaurantsMenu = () => {
    const { id } = useParams();

    const restaurant = useRestaurant(id)

    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem())
    }

    return (restaurant?.length == 0) ? <ShimmerEffect /> : (
        <>
            <div className=" w-60 h-80 rounded-md m-3 p-3">
                <img className="h-40 w-60 rounded-md" src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
                <h1>Restaurant id :{id}</h1>
                <h2>{restaurant.name}</h2>
                <h2>{restaurant.areaName}</h2>
                <h2>{restaurant.city}</h2>
                <h2>{restaurant.avgRating} stars</h2>
                <h2>{restaurant.costForTwoMessage}</h2>
            </div>
            <button className=" p-2 m-5 bg-green-200" onClick={() => handleAddItem()}>AddItem</button>
            <div>
                <h1>Menu</h1>

            </div>


        </>

    )
};
export default RestaurantsMenu;