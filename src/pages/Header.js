import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
    return (

      <Navbar className='main-menu'  variant='dark' expand="lg">
        <Navbar.Brand className='main-menu-brand' as={Link} to='/'>E-commerce API Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* <Nav className="mr-auto"> */}
            {/* <Nav.Link className='main-menu-item' as={Link} to='/'>Home</Nav.Link>
            <Nav.Link className='main-menu-item' as={Link} to='/products' >Products</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          {/* </Nav> */}

          <Nav className="ml-auto">
            <Nav.Link className='main-menu-item' as={Link} to='/signin' >Sign in</Nav.Link>
            <Nav.Link className='main-menu-item' as={Link} to='/signup' >Sign up</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>

    )
}

export default Header;



