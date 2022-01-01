import React from "react";

// This component is for when the user clicks on the Movies "part" of the webpage.
// I display what i want to display and also make sure the page is in right location and passing values to setValueToDisplay and setChosenLabel.

export default function Movies({ movies, setValueToDisplay, setChosenLabel }) {
  return (
    <section>
      {movies &&
        movies.map(({ attributes }, id) => {
          let { url, caption } = attributes.image.data.attributes;
          return (
            <div key={id}>
              <p>Titel: {attributes.title}</p>
              <img src={`http://localhost:1337${url}`} alt={caption} />
              <p>Premiär : {attributes.realeasedate}</p>
              <p>Längd : {attributes.duration}</p>
              <p>Betyg: {attributes.rating}/10</p>
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
