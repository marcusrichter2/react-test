import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import theme from '../Constants/Theme';
import clsx from 'clsx';

const useStyles = makeStyles({
    brand: {
        color: `${theme.colors.primaryColor} !important`,
        marginLeft: '50px',
        marginRight: '100px',
    },

    topNavItem: {
        borderRight: '1px solid black',
        paddingRight: '40px !important',
        paddingLeft: '40px !important',
        fontSize: '1.2rem',
        '& :hover': {
            color: `${theme.colors.primaryColor}`,
        },
    },

    dropDown: {
        '&> div': {
            backgroundColor: '#ccc',
        }
    },
    dropDownExpanded: {
        '&> div': {
            opacity: '1',          
            animationName: '$fadeInDropdown',            
            animationTimingFunction : 'ease-in',
            animationDuration : '.5s',
        }
    },
    '@keyframes fadeInDropdown': {
        "0%": {
          opacity: 0,          
        },
        "100%": {
          opacity: 1,          
        }
      }
});


export default () => {
    const classes = useStyles();

    const [expandedNavDropdown, setexpandedNavDropdown] = useState(null);

    return (
        <Navbar expand="lg" sticky="top">
            <Navbar.Brand href="#home" className={clsx(classes.brand)}>
                React<br />
                Test
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto" >                    
                    <Nav.Link href="#home" className={classes.topNavItem}>
                        <span>Home</span>
                    </Nav.Link>

                    <Nav.Link href="#link" className={classes.topNavItem}>
                        <span>Link</span>
                    </Nav.Link>
                    <NavDropdown 
                        title={<span>Dropdown</span>} 
                        className={clsx(classes.dropDown, classes.topNavItem, expandedNavDropdown === 'Dropdown' && classes.dropDownExpanded)} 
                        id="basic-nav-dropdown" 
                        onToggle={() => setexpandedNavDropdown('Dropdown')}>
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
