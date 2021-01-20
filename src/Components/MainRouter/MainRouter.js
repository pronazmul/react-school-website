import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const MainRouter = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className='mr-2' href="#home">Home</Nav.Link>
            <Nav.Link className='mr-2' href="#link">History</Nav.Link>
            <NavDropdown className='mr-2' title="Administration" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='mr-2' href="#link">Academics</Nav.Link>
            <Nav.Link className='mr-2' href="#link">Beyond Curriculum</Nav.Link>
            <Nav.Link className='mr-2' href="#link">Awards</Nav.Link>
            <Nav.Link className='mr-2' href="#link">Contract</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainRouter