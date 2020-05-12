import React from "react"
import UsersList from "../components/UsersList"

function Users() {

    const USERS = [{
        id: "u1",
        name: "bobby pol",
        image: "https://www.placecage.com/200/300",
        places: 3
    }];

    return <UsersList items={USERS} />
}

export default Users