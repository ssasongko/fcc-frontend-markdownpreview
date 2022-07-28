import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const navbarStyle = {
    background: '-webkit-linear-gradient(315deg,#42d392 25%,#647eff)',
    WebkitBackgroundClip : 'text',
    WebkitTextFillColor: 'transparent',
}

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark" style={{'border-bottom': '3px solid #363636'}}>
            <Container className="d-flex justify-content-center">
                <Navbar.Brand className="fw-bolder fs-2" style={navbarStyle}>Your Markdown</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header