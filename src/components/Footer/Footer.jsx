import React from "react";
import "./Footer.css";

import github from "../../assets/images/Github.png";
import linkedin from "../../assets/images/linkedin.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <span>
          Made with ❤️, by{" "}
          <a className="github" href="https://x.com/JayMehtalcw">
            Jay Mehta
          </a>
        </span>

        <p className="footer-copy">
          &copy; {year} ShadowMate — All Rights Reserved
        </p>
        <div className="social-links">
          <a href="https://github.com/star-warrior">
            {" "}
            <img src={github} alt="" />{" "}
          </a>
          <a href="www.linkedin.com/in/jay-mehta16">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
