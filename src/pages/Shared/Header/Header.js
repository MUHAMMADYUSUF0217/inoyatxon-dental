import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import blankAvatar from '../../../images/blank-avatar.png';

const Header = () => {
    const {user, logOut} = useAuth();
    const activeStyle = {
        fontWeight: "bold"
    };
    let userImg;
    if(user.photoURL) {
        userImg = user.photoURL;
    }
    else {
        userImg = blankAvatar;
    };
    return (
        <div>
            <Navbar collapseOnSelect sticky="top" expand="lg"  bg="light" variant="light">
            <Container>
            <Navbar.Brand><NavLink to="/home"><img src={logo} width="180" height="40" className="d-inline-block align-top" alt=""/></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto text-center">
                    <NavLink activeStyle={activeStyle} className="text-decoration-none my-1 me-4 text-info fs-6" to="/home">UY</NavLink>
                    <NavLink activeStyle={activeStyle} className="text-decoration-none my-1 me-4 text-info fs-6" to="/about">BIZ HAQIMIZDA</NavLink>
                    <NavLink activeStyle={activeStyle} className="text-decoration-none my-1 me-4 text-info fs-6" to="/services">XIZMATLAR</NavLink>
                    <NavLink activeStyle={activeStyle} className="text-decoration-none my-1 me-4 text-info fs-6" to="/appointment">BUYURTMA QILISH</NavLink>
                    <NavLink activeStyle={activeStyle} className="text-decoration-none my-1 me-4 text-info fs-6" to="/contact">BOG'LANISH</NavLink>
                </Nav>
                <Nav className="text-center">
                 {
                    user?.email ?
                    <div>
                        <Navbar.Text>{user.displayName} </Navbar.Text>
                        <img src={userImg} width="33" height="33" className="d-inline-block align-top rounded-circle me-2" alt=""/>
                        <Button onClick={logOut} variant="info text-white rounded-0"><i className="fas fa-sign-in-alt"></i>Chiqish</Button>
                    </div>
                    : 
                    <NavLink to="/signin"><Button variant="info text-white rounded-0"><i className="fas fa-sign-in-alt"></i> Kirish</Button></NavLink>
                 }
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;