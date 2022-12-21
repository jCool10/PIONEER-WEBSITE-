import React from "react";
import logo from "../../assets/logo_pioneer.png";

import "./Header.scss";

export default function Header() {
  return (
    <section className="container header">
      <a
        rel="noopener noreferrer"
        href="/"
        aria-label="Back to homepage"
        className="header-img"
      >
        <img src={logo} alt="" />
      </a>

      <div className="header-btn">
        <button>Sign in</button>
        <button className="sign-up ">Sign up</button>
      </div>
    </section>
  );
}
