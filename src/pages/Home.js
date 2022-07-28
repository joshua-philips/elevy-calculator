import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Result result={5000} />
    </div>
  );
}

function Result(props) {
  return (
    <div className="Result">
      <h1>
        <span>&#8373;</span>
        {props.result}
      </h1>
      <Link to="/how">How do we calculate the levy?</Link>
    </div>
  );
}
