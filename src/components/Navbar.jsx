import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import  Navbar  from "react-bootstrap/Navbar";
import { FaShoppingCart } from 'react-icons/fa';
import '../style/Navbar.css';
import { NavLink} from 'react-router-dom';
import logoImg from '../assets/logo-w.png'
import { useSelector } from 'react-redux';


const NavbarCom = ({ handleShow }) => {
  const cardLength = useSelector((state) => state.card.cardItems)
  return (
    <Navbar style={{ backgroundColor: "#F2F2F2" }} fixed="top" expand="lg">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>
          <img src={logoImg} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to="/" as={NavLink}>
              Products
            </Nav.Link>
            <div class="shop" onClick={handleShow}>
              {<FaShoppingCart />}
              <div className="num">{cardLength.length}</div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCom;