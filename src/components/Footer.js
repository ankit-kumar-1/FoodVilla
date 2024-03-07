import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {
    const { user } = useContext(UserContext)
    return (
        <div className=" m-3 flex justify-center items-center bg-slate-900 text-white overflow-hidden shadow-lg ">
            <a className="p-5" href="#">FAQ</a>
            <a className="p-5" href="#">Contact Us</a>
            <a className="p-5" href="#">Terms of Use</a>
            <a className="p-5" href="#">Privacy Policy</a>
            <a className="p-5" href="#">Refund Policy</a>
            <a className="p-5" href="#">&copy; 2023 | Food Villa</a>
            <span className=" font-bold">This site is created by-{user.name}</span>
        </div>
    )
}

export default Footer;