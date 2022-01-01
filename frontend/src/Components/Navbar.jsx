import React, { useState } from "react";
import ValueToDisplay from "./ValueToDisplay";

// My navigation component

export default function Navbar() {
  const [valueToDisplay, setValueToDisplay] = useState("");
  return (
    <nav>
      <h1>Örnsköldsviks Bibiliotek</h1>
      <div className="navBox">
        <button
          onClick={(e) => {
            setValueToDisplay(e.target.innerText);
          }}
        >
          Böcker
        </button>
        <button
          onClick={(e) => {
            setValueToDisplay(e.target.innerText);
          }}
        >
          Filmer
        </button>
        <button
          onClick={(e) => {
            setValueToDisplay(e.target.innerText);
          }}
        >
          Böcker och Filmer
        </button>

        <button
          onClick={(e) => {
            setValueToDisplay(e.target.innerText);
          }}
        >
          Genrer
        </button>
      </div>
      <ValueToDisplay
        valueToDisplay={valueToDisplay}
        setValueToDisplay={setValueToDisplay}
      />
    </nav>
  );
}
