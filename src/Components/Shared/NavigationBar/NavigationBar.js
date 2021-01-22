import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../Images/school.jpg'
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <nav>
            <div className="wrapper">
                <div className="logo"><Link to="#">Our School</Link></div>
                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />
                <ul className="nav-links">
                    <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times" /></label>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">Department</Link></li>
                    <li>
                        <Link to="#" className="desktop-item">Institute</Link>
                        <input type="checkbox" id="showDrop" />
                        <label htmlFor="showDrop" className="mobile-item">Faculties</label>
                        <ul className="drop-menu">
                            <li><Link to="#">Enginnering</Link></li>
                            <li><Link to="#">Electrical</Link></li>
                            <li><Link to="#">Mechanical</Link></li>
                            <li><Link to="#">Electronics</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#" className="desktop-item">Menus</Link>
                        <input type="checkbox" id="showMega" />
                        <label htmlFor="showMega" className="mobile-item">Mega Menu</label>
                        <div className="mega-box">
                            <div className="content">
                                <div className="row">
                                    <img src={img} alt='' />
                                </div>
                                <div className="row">
                                    <header>Academic Programme</header>
                                    <ul className="mega-links">
                                        <li><Link to="#">Number of Teachers</Link></li>
                                        <li><Link to="#">Academic Information</Link></li>
                                        <li><Link to="#">Faculties</Link></li>
                                        <li><Link to="#">Departments</Link></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>Activities</header>
                                    <ul className="mega-links">
                                        <li><Link to="#">News</Link></li>
                                        <li><Link to="#">Photo Gallery</Link></li>
                                        <li><Link to="#">FAQ</Link></li>
                                        <li><Link to="#">Contract US</Link></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>Security Strategy</header>
                                    <ul className="mega-links">
                                        <li><Link to="#">Ethis Committee</Link></li>
                                        <li><Link to="#">Core Committee</Link></li>
                                        <li><Link to="#">Working Group</Link></li>
                                        <li><Link to="#">Website design</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><Link to="#">Contract</Link></li>
                </ul>
                <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars" /></label>
            </div>
        </nav>

    )
}

export default NavigationBar

