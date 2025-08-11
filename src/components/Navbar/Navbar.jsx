import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ on, googleToken }) {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <Link
          className={
            on === "homePage"
              ? "navbar-title home navbar-link"
              : "navbar-title navbar-link"
          }
          to="/"
        >
          <span>🏸 ShadowMate</span>
        </Link>
      </div>
      <div className="navbar-links">
        <Link
          className={
            on === "homePage"
              ? "navbar-link navbar-content home"
              : "navbar-link navbar-content"
          }
          to="/practice"
        >
          Start Session
        </Link>
        {/* {googleToken !== null ? (
          <NavbarDropdown
            className={
              on === "homePage"
                ? "navbar-link navbar-content home"
                : "navbar-link navbar-content"
            }
            name={googleToken.name}
            picture={googleToken.picture}
            mail={googleToken.email}
          />
        ) : (
          <Link
            className={
              on === "homePage"
                ? "navbar-link navbar-content home"
                : "navbar-link navbar-content"
            }
            to="/login"
          >
            Login
          </Link>
        )} */}
      </div>
    </div>
  );
}
