import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-light p-3" style={{borderTop: '3px solid #363636'}}>
        <Navbar.Brand className="fs-6 fw-bold">© 2022 Nur Sasongko </Navbar.Brand>
    </footer>
  )
}

export default Footer