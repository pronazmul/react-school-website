import React from 'react'
import './NavigationBar.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../../Images/logo.jpg'

const NavigationBar = () => {
    return (
        <Navbar expand="sm" className='shadow'>
            <Container>
                <Navbar.Brand >
                    <Link to='/'>
                        <img width='100' src={logo} alt='' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link ><Link className='mr-2 text-decoration-none text-secondary' to=''>Home</Link></Nav.Link>
                        <Nav.Link ><Link className='mr-2 text-decoration-none text-secondary' to=''>History</Link></Nav.Link>
                        <NavDropdown className='mr-2 text-decoration-none text-secondary' title="Administration" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link className='text-decoration-none text-secondary' to=''>Action</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='text-decoration-none text-secondary' to=''>Another action</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='text-decoration-none text-secondary' to=''>Something</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='text-decoration-none text-secondary' to=''>Separated link</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link ><Link className='mr-2 text-decoration-none text-secondary' to=''>Academics</Link></Nav.Link>
                        <Nav.Link ><Link className='mr-2 text-decoration-none text-secondary' to=''>Beyond Curriculum</Link></Nav.Link>
                        <Nav.Link ><Link className='mr-2 text-decoration-none text-secondary' to='/abcd'>Awards</Link></Nav.Link>
                        <Nav.Link ><Link className='mr-2 text-decoration-none text-secondary' to='/contract'>Contract</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar