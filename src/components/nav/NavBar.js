import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Modal, ModalHeader, ModalBody } from 'reactstrap';
import "./NavBar.css"
import { ShoppingCart } from '../cart/ShoppingCart';
import { MDBIcon } from "mdbreact";




export const NavBar = ({ setActiveList, logout }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [cartModal, setCartModal] = useState(false)
  const toggleCart = () => setCartModal(!cartModal)

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="NavBar">
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
        <NavLink onClick={() => {toggleCart()}}><MDBIcon icon="shopping-cart" /> My Cart</NavLink>
      </Navbar>
      <Modal isOpen={cartModal} toggle={toggleCart} contentClassName="custom-modal-style-cart">
                    <ModalHeader toggle={toggleCart}>
                    </ModalHeader>
                    <ModalBody>
                        <ShoppingCart toggleCart={toggleCart} />
                    </ModalBody>
                </Modal>
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