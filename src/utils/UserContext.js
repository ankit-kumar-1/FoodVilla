import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Ankit Kumar",
        email: "ankitverma@242001@gmail.com",
    },
})

export default UserContext;