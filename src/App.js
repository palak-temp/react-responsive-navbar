/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Brand, Menu, CloseMenu } from "icons";
import Presenter from "images/presenter.png";
import clsx from "clsx";
import "./App.css";

function App() {
  // define state for toggle burger menu
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Brand />
          <span className="navbar-title">React Navbar</span>
        </div>
        <div className="navbar-burger" onClick={() => setOpen(!open)}>
          {!open ? <Menu /> : <CloseMenu />}
        </div>
        <div className={clsx("navbar-collapse", { show: open })}>
          <ul className={clsx("navbar-nav", { active: open })}>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Contact
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Blog
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="main">
        <h1 className="header">React Responsive Navbar</h1>
        <figure>
          <img src={Presenter} alt="Presenter" className="presenter" />
          <figcaption className="presenter-figcaption">
            Image create gose to <a href="https://undraw.co/search">undraw</a>{" "}
          </figcaption>
        </figure>
      </main>
    </>
  );
}

export default App;
