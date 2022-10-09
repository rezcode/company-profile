import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Logo/brand-logo.png";
import style from "./Navbar.module.css";

function Navigation() {
  return (
    <Navbar
      style={{ position: "fixed", width: "100%", marginTop: "-100px" }}
      bg="primary"
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">
          <div className={style.logoBrand}>
            <img src={logo} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${style.navlink}`}>
            <Nav.Link className={style.fromLeft} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={style.fromLeft} href="#about">
              About
            </Nav.Link>
            <Nav.Link className={style.fromLeft} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
