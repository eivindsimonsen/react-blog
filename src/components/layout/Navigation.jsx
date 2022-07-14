import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Login from "../../pages/Login";
import FooterNav from "../layout/FooterNav";

function Navigation() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Navbar className="header" expand="lg">
            <Container>
              <NavLink to="/" id="active-cancel" className="brand">
                React-Blog
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/About" exact element={<About />} />
              <Route path="/Login" exact element={<Login />} />
            </Routes>
          </Container>
        </Router>
      </div>

      <FooterNav />
    </>
  );
}

export default Navigation;
