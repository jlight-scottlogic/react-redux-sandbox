import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ToggleLogin from '../../security/toggle-login'
import BasketIcon from '../../features/basket/basket'

class NavbarComponent extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container className="pr-0">
                    <Navbar.Brand href="#home">React</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                        <Nav.Link as={Link} to="/other">Other</Nav.Link>
                    </Nav>
                    <Nav style={{ marginRight: '10px' }}>
                        <BasketIcon />
                    </Nav>
                    <Nav>
                        <ToggleLogin />
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarComponent;