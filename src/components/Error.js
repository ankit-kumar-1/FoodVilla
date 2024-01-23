import PageNotFound from "../assets/img/Custom-error.png"
import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <img src={PageNotFound} alt="" />
            <h2>{err.status}</h2>
            <h2>{err.statusText}</h2>
        </div>
    )
}
export default Error;