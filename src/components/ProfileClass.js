import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        //create state
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
                avatar: ""
            }
        };
        console.log("child-constructor")
    }

    async componentDidMount() {
        //BEST PLACE TO MAKE AN API CALL
        //all componentDidMount always call after the render
        const data = await fetch("https://api.github.com/users/ankit-kumar-1")
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json,
        });
        console.log("child-componentDidMount")
    }


    componentDidUpdate() {

        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    render() {
        console.log("child-render");
        return (
            <>
                <h1 className="font-semibold text-xl">Profile class component</h1>
                <img className="w-60" src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Location: {this.state.userInfo.location}</h2>

            </>
        )
    }
}

export default Profile;