import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import "./contact.css";
import logoWhiteImage from "../assets/logo-white.png";

const contacts = [
  { icon: faLocationDot, info: "123 Fake Ave, Chicago, IL 60602" },
  { icon: faPhone, info: "+1 (012) 345-6789" },
  { icon: faEnvelope, info: "info@littlelemon.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faInstagram, name: "instagram" },
  { icon: faTwitter, name: "twitter" },
  { icon: faYoutube, name: "youtube" },
];

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

function Contact() {
  return (
    <footer className="site-footer">
      <img
        className="site-footer-logo"
        src={logoWhiteImage}
        alt="Little Lemon"
      />
      <nav className="site-footer-nav">
        <ul>
          <li><h4>Sitemap</h4></li>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <HashLink to={navLink.path}>{navLink.name}</HashLink>
            </li>
          ))}
        </ul>
      </nav>
      <ul>
        <li>
          <div className="site-footer-contact">
            <h4>Contact us</h4>
            <address>
              {contacts.map((contact, index) => (
                <p key={index}>
                  <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                </p>
              ))}
            </address>
          </div>
        </li>
        <br></br>
        <li>
          <div className="site-footer-social">
            <h4>Connect with us</h4>
            {socials.map((social, index) => (
              <a
                key={index}
                href={`https://www.${social.name}.com`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;