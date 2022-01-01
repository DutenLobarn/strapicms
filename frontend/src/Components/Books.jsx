import React from "react";

// This component is for when the user clicks on the Books "part" of the webpage.
// I display what i want to display and also make sure the page is in right location and passing values to setValueToDisplay and setChosenLabel.

export default function Books({ books, setValueToDisplay, setChosenLabel }) {
  return (
    <section>
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
              <p>
                Genre:
                {attributes.labels.data.map(({ attributes }, id) => {
                  return (
                    <li
                      onClick={(e) => {
                        setValueToDisplay("ChosenCategory");
                        setChosenLabel(e.target.innerText);
                        window.scrollTo({ top: 0 });
                      }}
                      key={id}
                    >
                      {attributes.label}
                    </li>
                  );
                })}
              </p>
            </div>
          );
        })}
    </section>
  );
}
