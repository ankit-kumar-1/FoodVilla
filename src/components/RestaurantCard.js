import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    locality,
    sla,
    costForTwo
}) => {

    return (
        <div className=" w-60 h-96 rounded-md m-3 p-3 hover:shadow-lg hover:bg-pink-100">
            <img className="h-40 w-60 rounded-md object-cover" src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-semibold text-xl">{name}</h2>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{locality}</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{costForTwo}</h4>
            <h5>{avgRating} stars</h5>
        </div>

    );
};

export default RestaurantCard;