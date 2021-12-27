import React from "react";

export default function Books({ books, setValueToDisplay, setChosenLabel }) {
  return (
    <div>
      {books &&
        books.map(({ attributes }, id) => {
          let { url, caption } = attributes.image.data.attributes;
          return (
            <div key={id}>
              <p>Titel: {attributes.title}</p>
              <img src={`http://localhost:1337${url}`} alt={caption} />
              <p>Författare: {attributes.author}</p>
              <p>Antal Sidor: {attributes.pages}</p>
              <p>Betyg: {attributes.rating}/5</p>
              Genre:
              {attributes.labels.data.map(({ attributes }, id) => {
                return (
                  <li
                    onClick={(e) => {
                      setValueToDisplay("ChosenCategory");
                      setChosenLabel(e.target.innerText);
                    }}
                    key={id}
                  >
                    {attributes.label}
                  </li>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
