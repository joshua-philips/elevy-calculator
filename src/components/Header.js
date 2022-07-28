import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">
          <ElevyLogo />
        </Link>
        <a
          className="header-link"
          href="https://gra.gov.gh/e-levy/"
          target="_blank"
          rel="noreferrer"
        >
          Read Official E-Levy Document
        </a>
      </div>
    );
  }
}

class ElevyLogo extends Component {
  render() {
    return (
      <div className="ElevyLogo">
        <div className="text">
          <h1>E-LEVY</h1>
          <p>calculator</p>
        </div>
      </div>
    );
  }
}
