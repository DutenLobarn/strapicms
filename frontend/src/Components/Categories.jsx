import React from "react";

// This component is for when the user clicks on the Genre "part" of the webpage.
// I display what i want to display and also make sure the page passing values to setValueToDisplay and setChosenLabel.

export default function Categories({
  categories,
  setValueToDisplay,
  setChosenLabel,
}) {
  return (
    <div className="categoriesWrapper">
      {categories &&
        categories.map(({ attributes }, id) => {
          return (
            <button
              onClick={(e) => {
                setValueToDisplay("ChosenCategory");
                setChosenLabel(e.target.innerText);
              }}
              key={id}
            >
              {attributes.label}
            </button>
          );
        })}
    </div>
  );
}
