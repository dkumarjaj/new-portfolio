import { NavLink } from "react-router";
import "../styles/Navbar.css";
function Nav() {
  return (
    <nav className="navbar">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
        end
        to="/portfolio"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
        to="/portfolio/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
        to="/portfolio/project"
      >
        Projects
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
        to="/portfolio/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
        to="/portfolio/gallery"
      >
        Gallery
      </NavLink>
    </nav>
  );
}

export default Nav;
