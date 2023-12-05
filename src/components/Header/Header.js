import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";

const Header = () => {
   return (
      <Navbar bg='light' fixed='top'>
         <Container>
            <Navbar.Brand href='/'>
               <img
                  src={logo}
                  height='30'
                  className='d-inline-block align-top'
                  alt='logo'
               />
            </Navbar.Brand>
         </Container>
      </Navbar>
   );
};

export default Header;
