import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY > +80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {};
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Bank
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  eact="true"
                  offset={-80}
                  spy={true}
                  activeClass="active"
                >
                  About
                </NavLinks>
              </NavItem>{" "}
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  eact="true"
                  offset={-80}
                  spy={true}
                  activeClass="active"
                >
                  Discover
                </NavLinks>
              </NavItem>{" "}
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  eact="true"
                  offset={-80}
                  spy={true}
                  activeClass="active"
                >
                  services
                </NavLinks>
              </NavItem>{" "}
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  eact="true"
                  offset={-80}
                  spy={true}
                  activeClass="active"
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
