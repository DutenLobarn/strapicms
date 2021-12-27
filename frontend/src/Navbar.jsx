import React, { useState } from "react";
import ValueToDisplay from "./ValueToDisplay";

export default function Navbar() {
  const [valueToDisplay, setValueToDisplay] = useState("");
  return (
    <div>
      <h1>Örnsköldsviks Bibiliotek</h1>
      <div>
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
      </div>
      <button
        onClick={(e) => {
          setValueToDisplay(e.target.innerText);
        }}
      >
        Genrer
      </button>
      <ValueToDisplay
        valueToDisplay={valueToDisplay}
        setValueToDisplay={setValueToDisplay}
      />
    </div>
  );
}
