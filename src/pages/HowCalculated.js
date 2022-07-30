import React from "react";
import Header from "../components/Header";
import "./HowCalculated.css";

export default function HowCalculated() {
  return (
    <div className="HowCalculated">
      <Header />
      <HowText />
    </div>
  );
}

function HowText() {
  return (
    <div className="HowText">
      <h2>How do we calculate the levy?</h2>
      <p>
        The E-Levy which is 1.5% of the input value is added to the value itself
      </p>
      <p>
        The additional network charge by mobile network providers which is 0.75%
        is also added to the value
      </p>
      <p>
        For any further information contact philipsjoshua96@gmail.com. Or you
        can read more at the{" "}
        <a
          className="inline-link"
          href="https://gra.gov.gh/e-levy/"
          target="_blank"
          rel="noreferrer"
        >
          Official Ghana Revenue Authority website
        </a>
      </p>
    </div>
  );
}
