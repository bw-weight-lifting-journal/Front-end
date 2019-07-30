import React from 'react';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';

import './Footer.scss';

function Footer() {
  return (
    <div>
      <Navbar className="ftr" color="light" light expand="md">
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