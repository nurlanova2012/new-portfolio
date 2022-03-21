import React from "react";
import "./topbar.scss";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <header className={"topbar " + (menuOpen && "topbar--active")} id="topbar">
      <div className="topbar__inner">
        <div className="topbar__left">
          <a href="#intro" className="topbar__logo">
            Nurlanbekova.
          </a>
          <div className="topbar__contact-item">
            <PhoneIcon className="topbar__icon" />
            <span>+996 776059020</span>
          </div>
          <div className="topbar__contact-item">
            <MailIcon className="topbar__icon" />
            <span>nurlanova2012@mail.com</span>
          </div>
        </div>
        <div className="topbar__right">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="topbar__nav-toggler"
          ></button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
