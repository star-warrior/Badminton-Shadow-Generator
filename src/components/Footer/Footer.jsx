import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="Footer">
      <span> {year}, All rights Reserved </span>
      <span>
        {" "}
        Made with ❤️, By <a href="https://github.com/star-warrior">
          Jay Mehta
        </a>{" "}
      </span>
    </div>
  );
}

export default Footer;
