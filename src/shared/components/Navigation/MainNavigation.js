import React from "react"
import { Link } from "react-router-dom"

import NavLinks from "./NavLinks"
import MainHeader from "./MainHeader"
import SideDrawer from "./SideDrawer"
import "./MainNavigation.css"

function MainNavigation(props) {

    return <React.Fragment>
        <SideDrawer>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">YourPlaces </Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>
    </React.Fragment>




}



export default MainNavigation