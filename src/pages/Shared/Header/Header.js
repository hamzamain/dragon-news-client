import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="mb-4"
      sticky="top"
    >
      <Container>
        <Navbar.Brand className="fw-bold text-primary">
          <Link to={"/"}>Dragon News</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/category/08">Category</Nav.Link>
            <Nav.Link href="/try">Try</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex align-items-center">
            <div href="#deets">
              {user?.uid ? (
                <div>
                  <span className="fw-semibold">{user?.displayName}</span>
                  <span
                    className={
                      user?.emailVerified === false
                        ? "text-danger"
                        : "text-success"
                    }
                  >
                    {"   "}
                    verified: {user?.emailVerified === false ? "false" : "true"}
                  </span>
                  <Button
                    onClick={handleLogOut}
                    variant="light"
                    size="sm"
                    className="ms-3"
                  >
                    LogOut
                  </Button>
                </div>
              ) : (
                <div>
                  <Link className="me-3 text-dark" to={"/login"}>
                    Login
                  </Link>
                  <Link className="me-3 text-dark" to={"/register"}>
                    Register
                  </Link>
                </div>
              )}
            </div>
            <Link to="/profile">
              {user?.uid ? (
                <Image
                  src={user?.photoURL}
                  style={{ height: "40px", width: "40px" }}
                  roundedCircle
                ></Image>
              ) : (
                <FaUserAlt className="text-black" />
              )}
            </Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
            <RightSideNav></RightSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
