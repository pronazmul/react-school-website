import React from 'react'
import './NavigationBar.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../../Images/logo.jpg'

const NavigationBar = () => {

    function myFunction(e) {
        e.preventDefault();
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (


        <div className="topnav" id="myTopnav">
            <a href="#home" className="active">Home</a>
            <div className="dropdown">
                <button className="dropbtn">Dropdown
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#news">News</a>
                    <a href="#news">News</a>
                    <a href="#news">News</a>
                    <a href="#news">News</a>
                </div>
            </div>
            <a href="#news">About</a>
            <a href="#contact">Admission</a>
            <a href="#contact">Academics</a>
            <div className="dropdown">
                <button className="dropbtn">Dropdown
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#news">Computer Science and Engineering</a>
                    <a href="#news">News</a>
                    <a href="#news">News</a>
                    <a href="#news">News</a>
                </div>
            </div>
            <a href="#contact">Events</a>
            <a href="#contact">Video</a>
            <a href="#contact">Contact</a>
            <div className="dropdown">
                <button className="dropbtn">Dropdown
                <i class="fa fa-angle-down" style={{ fontSize: '26px' }}></i>
                </button>
                <div className="dropdown-content">
                    <a href="#news">News</a>
                    <a href="#news">News</a>
                    <a href="#news">News</a>
                    <a href="#news">News</a>
                </div>
            </div>
            <a href="#about">About</a>
            <a href={{ javascript: void (0) }} style={{ fontSize: '16px' }} className="icon" onClick={myFunction}>&#9776;</a>

        </div>


        // <Navbar expand="sm" className='shadow'>
        //     <Container>
        //         <Navbar.Brand >
        //             <Link to='/'>
        //                 <img width='100' src={logo} alt='' />
        //             </Link>
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="ml-auto">
        //                 <Nav.Link ><Link className='mr-2 text-decoration-none text-secondary' to=''>Home</Link></Nav.Link>
        //                 <Nav.Link ><Link className='mr-2 text-decoration-none text-secondary' to=''>History</Link></Nav.Link>
        //                 <NavDropdown className='mr-2 text-decoration-none text-secondary' title="Administration" id="basic-nav-dropdown">
        //                     <NavDropdown.Item><Link className='text-decoration-none text-secondary' to=''>Action</Link></NavDropdown.Item>
        //                     <NavDropdown.Item><Link className='text-decoration-none text-secondary' to=''>Another action</Link></NavDropdown.Item>
        //                     <NavDropdown.Item><Link className='text-decoration-none text-secondary' to=''>Something</Link></NavDropdown.Item>
        //                     <NavDropdown.Item><Link className='text-decoration-none text-secondary' to=''>Separated link</Link></NavDropdown.Item>
        //                 </NavDropdown>
        //                 <Nav.Link ><Link className='mr-2 text-decoration-none text-secondary' to=''>Academics</Link></Nav.Link>
        //                 <Nav.Link ><Link className='mr-2 text-decoration-none text-secondary' to=''>Beyond Curriculum</Link></Nav.Link>
        //                 <Nav.Link ><Link className='mr-2 text-decoration-none text-secondary' to='/abcd'>Awards</Link></Nav.Link>
        //                 <Nav.Link ><Link className='mr-2 text-decoration-none text-secondary' to='/contract'>Contract</Link></Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )
}

export default NavigationBar