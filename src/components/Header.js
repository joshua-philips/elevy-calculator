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
        <p className="attribution">Photo by <a href="https://unsplash.com/@niyomax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">maxime niyomwungeri</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
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
