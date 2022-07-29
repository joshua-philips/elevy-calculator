import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [number, setNumber] = useState(null);
  const [result, setResult] = useState(0);

  function handleInputChange(event) {
    setNumber(event.target.value);
    console.log();
  }

  function submitForm(e) {
    e.preventDefault();
    let calculate = 0;
    calculate = number * (1.5 / 100);
    calculate += number * (0.75 / 100);
    try {
      calculate = Number(calculate) + Number(number);
      setResult(calculate);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="Home">
      <Header />
      <div className="form-container">
        <h2>Before Charges</h2>
        <form className="form" onSubmit={submitForm}>
          <input
            type="number"
            value={number}
            onChange={handleInputChange}
            required
            className="input"
            step="any"
            min="0"
            max="999999999999999"
          />
          <input type="submit" value="Apply" className="submit" />
        </form>
      </div>
      <Result result={result} />
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
