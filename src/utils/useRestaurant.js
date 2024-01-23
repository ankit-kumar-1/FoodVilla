import { FETCH_MENU_URL } from "../config";
import { useState, useEffect } from "react";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL + id);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        // setRestaurant(json?.data?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info)
    }
    return restaurant;
};

export default useRestaurant;