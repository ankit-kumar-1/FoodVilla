import { Link } from "react-router-dom";
const Contact = () => {
    return (
        <div className="m-4 bg-pink-50">
            <h1>Contact us</h1>
            <p>This is my contact page, you can contact directly with us.</p>
            <Link to="ankitverma242001@gmail.com">Email: ankitverma242001@gmail.com </Link>
            <Link to="9151466441">Phone: +91-9151466441</Link>
        </div>
    )
}
export default Contact;