import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Logo.svg";
import "./nav.css";
import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    path: "/#home",
    hashLink: true,
  },
  {
    name: "About",
    path: "/#about",
    hashLink: true,
  },
  {
    name: "Menu",
    path: "/#menu",
    hashLink: true,
  },
  {
    name: "Reservations",
    path: "/booking",
    hashLink: false,
  },
  {
    name: "Order Online",
    path: "/working",
    hashLink: false,
  },
  {
    name: "Login",
    path: "/working",
    hashLink: false,
  },
];

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header id="home">
      <nav className="container grid nav-bar">
        <HashLink className="nav-bar-logo" to="/">
          <img src={Logo} alt="Little Lemon logo" />
        </HashLink>
        <button
          className="nav-bar-hamburger"
          type="button"
          aria-label="On Click"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <ul
          className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
        >
          {navLinks.map((navLink) => (
            <li
              key={navLink.name}
              onClick={() => setIsNavExpanded(false)}
              aria-label="On Click"
              className="hover-underline-animation"
            >
              {navLink.hashLink ? (
                <HashLink to={navLink.path}>{navLink.name}</HashLink>
              ) : (
                <Link to={navLink.path}>{navLink.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  }