import React from "react"
import { NavbarBrand, NavItem, NavLink, Nav } from "reactstrap"
import "./NavBar.css"

export const NavBar = ({ setActiveList, logout } ) => {
    return (
            <Nav id="navigation">
                <NavbarBrand>FeelingHeart</NavbarBrand>
                <NavItem>
                    <NavLink onClick={() => { setActiveList("homepage_view")}}>Home Page</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => { setActiveList("FHChartList")}}>Make New Chart</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={logout}>Logout</NavLink>
                </NavItem>
            </Nav>
    )
}