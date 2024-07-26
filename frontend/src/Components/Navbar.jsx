import React from 'react'
import {Link} from 'react-router-dom'
import '../Components/Navbar.css'

function Navbar() {
    return (
        <div className='nav1'>
            <div className='nav2 nav3'>
                <span style={{ color: 'white', marginLeft: '5%' }}>Agri</span><span style={{ color: 'white' }}>Sense</span>
            </div>
            <div className='nav2 nav4'>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <a href="" className="dropdown">
                    Crop <i className="fa fa-caret-down"></i>
                    <div className="dropdown-content">
                        <Link to="/fieldbot">Field Bot</Link>
                        <Link to="/cropai">Crop Ai</Link>
                        <Link to="/cropdoctor">Crop Doctor</Link>
                    </div>
                </a>
                <a href="" className="dropdown">
                    Detection <i className="fa fa-caret-down"></i>
                    <div className="dropdown-content">
                        <Link to="/animaldeduction">Animal Detection</Link>
                        <Link to="/pestmanagement">Pest Management</Link>
                    </div>
                </a>
                <a href="" className="dropdown">
                    Others <i className="fa fa-caret-down"></i>
                    <div className="dropdown-content">
                        <Link to="/community">Community</Link>
                        <a href="chatbot">Chatbot</a>
                        <Link to="/alert">Alert & Notifications</Link>
                        <Link to="/profile">Profile</Link>
                    </div>
                </a>
                <Link to="/pricing">Pricing</Link>
            </div>
        </div>
    )
}

export default Navbar