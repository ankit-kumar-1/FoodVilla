
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
const RestaurantsMenu = () => {
    const { id } = useParams();

    const restaurant = useRestaurant(id)

    return (restaurant?.length == 0) ? <ShimmerEffect /> : (
        <>
            <div className=" w-60 h-96 rounded-md m-3 p-3">

                <img className="h-40 w-60 rounded-md" src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
                <h1>Restaurant id :{id}</h1>
                <h2>{restaurant.name}</h2>
                <h2>{restaurant.areaName}</h2>
                <h2>{restaurant.city}</h2>
                <h2>{restaurant.avgRating} stars</h2>
                <h2>{restaurant.costForTwoMessage}</h2>
                <div>{restaurant.menu}</div>
            </div>


        </>

    )
};
export default RestaurantsMenu;