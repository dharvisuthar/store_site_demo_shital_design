import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/logo_sital_design.svg";
import { debounce } from '../utilities/helpers';
const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);
  const navbarStyles = {
    position: 'fixed',
    height: '65px',
    width: '100%',
    backgroundColor: "#ffffff",
    textAlign: 'center',
    transition: 'top 0.6s',
    boxShadow: "0 0 10px 0 rgb(0 0 0 / 10%)",
  }
  return (
    <div className="navbar-header">
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="/"><img src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/product">Product</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar></Container>
      <div style={{ ...navbarStyles, top: visible ? '-200px' : '0' }}>
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand href="/"><img src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/product">Product</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar></Container>
      </div>
    </div>
  );
}
export default Header