import React from "react";

export default function Categories({
  categories,
  setValueToDisplay,
  setChosenLabel,
}) {
  return (
    <div>
      {categories &&
        categories.map(({ attributes }, id) => {
          return (
            <p
              onClick={(e) => {
                setValueToDisplay("ChosenCategory");
                setChosenLabel(e.target.innerText);
              }}
              key={id}
            >
              {attributes.label}
            </p>
          );
        })}
    </div>
  );
}
