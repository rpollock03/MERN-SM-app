import React from "react"
import { useParams } from "react-router-dom"

import PlaceList from "../components/PlaceList"

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Empire State Building",
        description: "very famous building",
        imageUrl: "http://www.fillmurray.com/g/200/300",
        address: "17 ashley park",
        location: {
            lat: 40.7484405,
            lon: -73.9878584
        },
        creator: "u1"

    },
    {
        id: "p2",
        title: "Empire State Building",
        description: "very famous building",
        imageUrl: "http://www.fillmurray.com/g/200/300",
        address: "17 ashley park",
        location: {
            lat: 40.7484405,
            lon: -73.9878584
        },
        creator: "u2"

    },
    {
        id: "p3",
        title: "Empire State Building",
        description: "very famous building",
        imageUrl: "http://www.fillmurray.com/g/200/300",
        address: "17 ashley park",
        location: {
            lat: 40.7484405,
            lon: -73.9878584
        },
        creator: "u3"

    }

]

function UserPlaces() {
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} />
}




export default UserPlaces