import { useState, useEffect, useContext } from "react";
import { FETCH_ALL_RESTAURANTS, restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import ShimmerEffect from "./ShimmerEffect";
import NotFound from "../assets/img/page-not-found-error-404.jpg"
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        //API CALL
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch(FETCH_ALL_RESTAURANTS);
        const json = await data.json();
        // console.log(json);
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>🛑offline, check your internet connection !</h1>
    }
    // not render component = (Early return)
    if (!allRestaurants) return null;


    return (allRestaurants?.length == 0) ? <ShimmerEffect /> : (filteredRestaurants?.length == 0) ? <img src={NotFound} alt="" /> : (
        <div className="bg-gray-200 mx-4">
            <div className=" p-5 my-5">
                <input
                    type="text"
                    className=" p-2 rounded-md"
                    placeholder="search"
                    value={searchTxt}
                    onChange={(e) => {
                        setSearchTxt(e.target.value);
                    }}
                />
                <button
                    className=" p-2 m-2 bg-purple-500 hover:bg-purple-800 text-white rounded-md"
                    onClick={() => {
                        const filteredData = filterData(searchTxt, allRestaurants);
                        setFilteredRestaurants(filteredData);
                    }}
                >
                    search
                </button>
                <input className="p-2 m-2" value={user.name} onChange={(e) => setUser({
                    ...user,
                    name: e.target.value,
                })} />
                <input className="p-2 m-2" value={user.email} onChange={(e) => setUser({
                    ...user,
                    email: e.target.value,
                })} />
            </div>

            <div className="restaurant-list flex flex-wrap">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCard {...restaurant.info} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;


