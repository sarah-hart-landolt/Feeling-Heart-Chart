import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./NavBar.css"



export const NavBar = ({ setActiveList, logout }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">FeelingHeart</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
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
        </Collapse>
      </Navbar>
    </div>
  );
}



// export const NavBar = ({ setActiveList, logout } ) => {
//     return (
//             <Nav id="navigation">
//                 <NavbarBrand>FeelingHeart</NavbarBrand>
//                 <NavItem>
//                     <NavLink onClick={() => { setActiveList("homepage_view")}}>Home Page</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink onClick={() => { setActiveList("FHChartList")}}>Make New Chart</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink onClick={logout}>Logout</NavLink>
//                 </NavItem>
//             </Nav>
//     )
// }