import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import theme from '../Constants/Theme'

const useStyles = makeStyles({
    brand: {
        color: `${theme.colors.primaryColor} !important`,
        marginLeft: '50px',
        marginRight: '100px',
    }
  });


export default () => {
    const classes = useStyles();

    return (
        <Navbar expand="lg" className="top-fixed">
            <Navbar.Brand href="#home" className={classes.brand}>
                React<br/>
                Test
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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
