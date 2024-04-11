import { useState, useContext } from "react";
import Logo from "../assets/img/FoodVilla.png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const loggedInUser = () => {

    return false;
};

export const Title = () => (   //named export
    <Link to="/">
        <img className=" h-24 " src={Logo} alt="logo" />
    </Link>
);

const Header = () => {
    const [isLoggedInUser, setIsLoggedInUser] = useState(false);
    const isOnline = useOnline();


    const { user } = useContext(UserContext)
    const cartItems = useSelector(store => store.cart.items);
    return (
        <div className="flex justify-between border-b-2 m-4 bg-pink-50 shadow-lg">
            <Title />

            <div className="">
                <ul className=" flex mt-8">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-2"><Link to="/cart">Cart- {cartItems.length} items</Link></li>
                </ul>
            </div>
            <h1 className="p-10 text-sm ">{isOnline ? "🟢 Online" : "🔴 Offline"}</h1>
            <span className=" p-10 font-bold text-purple-900 ">{user.name}</span>
            {isLoggedInUser ? <button className="h-10 w-20 p-2 m-8 bg-purple-600 hover:bg-purple-800 text-white rounded-md" onClick={() => setIsLoggedInUser(false)}>Logout</button> : <button className="h-10 w-20 p-2 m-8 bg-purple-600 hover:bg-purple-800 text-white rounded-md" onClick={() => setIsLoggedInUser(true)}>Login</button>}
        </div>
    );
};

export default Header;  //default export