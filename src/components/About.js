import { Outlet } from "react-router-dom";
import Profile from '/src/components/ProfileClass';
import React from "react";
import { render } from "react-dom";
import UserContext from "../utils/UserContext";


class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("parent-constructor")
    }
    componentDidMount() {

        console.log("parent-componentDidMount")
    }

    render() {
        console.log("parent-render")
        return (
            <div className="m-4 bg-pink-50">
                <h1 className="text-xl font-semibold">About Us Page</h1>
                <p>"Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</p>
                <h1>What’s In Store For The Future?</h1>
                <p>Swiggy has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings.</p>
                {/* <Outlet /> */}
                {/* <ProfileFunctionalComponent name={"Ankit"} /> */}
                <Profile name={"AnkitClass"} />
                <UserContext.Consumer>
                    {({ user }) => <h4 className=" font-bold text-xl">{user.email}</h4>}
                </UserContext.Consumer>
            </div>
        )
    }
}
export default About;