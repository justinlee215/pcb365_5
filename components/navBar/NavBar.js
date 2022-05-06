import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import CustomDropdown from "../dropdown/CustomDropdown";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import { Person } from "react-bootstrap-icons";

import logo from "../../public/images/whitelogo.png";
import PropTypes from "prop-types";

export default function NavBar({
  backgroundColor,
  primary,
  size,
  label,
  ...props
}) {
  const [show, setShow] = useState(false);

  const hideDropdown = (e) => {
    setShow(false);
  };

  const showDropdown = (e) => {
    setShow(!show);
  };

  const mode = primary ? "navbar-secondary" : "navbar-primary";

  return (
    <Navbar
      sticky="top"
      className={["navbar", `navbar-${size}`, mode].join(" ")}
      expand="lg"
      variant="dark"
    >
      <Container fluid>
        <Link href="/">
          <Navbar.Brand href="/" className="logo">
            <Image
              priority
              src={logo}
              width={90}
              height={56.5}
              alt="image"
              className="logo_image"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" className="navbar-toggle" />
        <Navbar.Collapse id="navbarScroll" className="navbar-collapse">
          <Nav className="nav-section1" navbarScroll>
            <CustomDropdown
              itemName="eForms"
              className="navdropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            ></CustomDropdown>
            <Link href="/reports">
              <Nav.Link href="/">Reports</Nav.Link>
            </Link>
            <NavDropdown
              title="Shipments" // id="navbarScrollingDropdown"
              // className="navdropdown"
            >
              <Link href="/shipments/canada">
                <NavDropdown.Item href="#action3" className="nav-items">
                  Shipments to Canada
                </NavDropdown.Item>
              </Link>
              <Link href="/shipments/us">
                <NavDropdown.Item href="#action4" className="nav-items">
                  Shipments to US
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/shipments/mexico">
                <NavDropdown.Item href="#action5" className="nav-items">
                  Shipments to Mexico
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Nav className="nav-section2">
            <NavDropdown
              title="Documentation"
              id="navbarScrollingDropdown"
              className="navdropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <Link href="/forms/canadacustomsinvoice">
                <NavDropdown.Item href="#action3" className="nav-items">
                  Canada Customs Invoice
                </NavDropdown.Item>
              </Link>
              <Link href="/forms/uscustomsinvoice">
                <NavDropdown.Item href="#action4" className="nav-items">
                  US Customs Invoice
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/forms">
                <NavDropdown.Item href="#action5" className="nav-items">
                  All Documentation
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link href="/contactus">
              <Nav.Link
                href="/"
                style={{
                  minWidth: "100px",
                }}
                className="contactus"
              >
                Contact Us
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="nav-section3">
            <Link href="/logIn">
              <Nav.Link href="/">
                Log In <Person className="iconPerson" size={20} />{" "}
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

NavBar.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "large",
  onClick: undefined,
};
