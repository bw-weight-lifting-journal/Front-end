import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './Footer.scss';

function Footer() {
  return (
    <div>
      <Navbar className="ftr" color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink className="footerLink" href="#">Terms and Conditions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="footerLink" href="#">Privacy Policy</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
            <NavItem>
              <span className="footerLink">Copyright © 2019</span>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Footer;