

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';  // Import Link from react-scroll
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon
import { faHouseChimney, faHouseLaptop } from '@fortawesome/free-solid-svg-icons'; 
import { faDAndD } from '@fortawesome/free-brands-svg-icons';
import Favicon from 'react-favicon';  
import "./nav.css";

function NavScrollExample({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Update authentication state
    navigate('/login'); // Redirect to login page
  };

  return (
    <>
      {/* Favicon Component */}
      <Favicon url="your-favicon-url.ico" />

      <Navbar
        expand="lg"
        style={{
          backgroundColor: '#1c3a63',
          color: 'white',
        }}
        className="fixed-top px-5 shadow-sm"
      >
        {/* Logo */}
        <img 
          src="https://img.freepik.com/premium-vector/minimalist-table-with-computer-workspace-logo-design-vector-graphic-symbol-icon-sign-illustration_15473-10057.jpg?w=740" 
          alt="logo" 
          className="laptop-only-logo me-3"
          style={{ height: "50px" }} // Adjusted height for better alignment
        />
    
        <Container fluid>
          <Navbar.Brand
            as={NavLink}
            to="/"
            style={{
              color: '#ffa500',
              fontWeight: 'bold',
            }}
          >
            WorkSpace
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" style={{ borderColor: '#f0f8ff' }} />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 d-flex align-items-center gap-3 px-4 mx-5" navbarScroll>
              <Nav.Link as={NavLink} to="/" className="mx-3" style={{ color: '#f0f8ff', fontWeight: '500'}}>
                <FontAwesomeIcon icon={faHouseChimney} className="me-2" />
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/search" className="mx-3" style={{ color: '#f0f8ff', fontWeight: '500'}}>
                WorkSpaces
              </Nav.Link>

              {isAuthenticated && (
                <Nav.Link
                  as={NavLink}
                  to="/my-bookings"
                  className="mx-3"
                  style={{ color: '#f0f8ff', fontWeight: '500' }}
                >
                  My Bookings
                </Nav.Link>
              )}

              {/* Smooth Scroll Links */}
              <Nav.Link className="mx-3">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  style={{ color: '#f0f8ff', fontWeight: '500', cursor: 'pointer' }}
                >
                  About
                </Link>
              </Nav.Link>

              <Nav.Link className="mx-3">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  style={{ color: '#f0f8ff', fontWeight: '500', cursor: 'pointer' }}
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>

            <Nav className="d-flex align-items-center gap-3">
              {isAuthenticated ? (
                <Nav.Link
                  onClick={handleLogout}
                  className="mx-3"
                  style={{
                    backgroundColor: "336D82",
                    color: 'white',
                    borderRadius: '5px',
                    padding: '5px 15px',
                    fontWeight: '500',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                >
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className="mx-3"
                  style={{
                    backgroundColor: '#4682b4',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '5px 15px',
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  Login/Register
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
