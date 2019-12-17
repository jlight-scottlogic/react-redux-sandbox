import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import routes from './routes/routes';
import Container from 'react-bootstrap/Container';

export default class CategoryNavbarComponent extends React.Component {
    render() {

        if (this.props.category == null) {
            return null;
        }

        return (
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href={routes.details(this.props.category.id)}>{this.props.category.name}</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to={routes.details(this.props.category.id)}>Details</Nav.Link>
                        <Nav.Link as={Link} to={routes.edit(this.props.category.id)}>Edit</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}