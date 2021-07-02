import React, { Component } from 'react'
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";


export default class Navigation extends Component {
    render() {
        return (
            <Navbar className="navbar sticky-top navbar-light bg-light" bg="light" expand="lg" style={{ width: 'auto' }}>
                <Navbar.Brand href="/Home">Car Rental</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <NavDropdown title="Actions" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Car/CarsList">Cars</NavDropdown.Item>
                            <NavDropdown.Item href="/User/UsersList">Users</NavDropdown.Item>
                            <NavDropdown.Item href="/Rental/RentalsList">Rentals</NavDropdown.Item>
                            <NavDropdown.Item href="/Address/AddressesList">Addresses</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Home">Home</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}