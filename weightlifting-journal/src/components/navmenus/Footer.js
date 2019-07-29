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
      <Navbar color="light" light expand="md" fixed="bottom">
        <Nav className="mr-auto ftr" navbar>
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