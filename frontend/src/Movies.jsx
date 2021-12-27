import React from "react";

export default function Movies({ movies, setValueToDisplay, setChosenLabel }) {
  return (
    <div>
      {movies &&
        movies.map(({ attributes }, id) => {
          let { url, caption } = attributes.image.data.attributes;
          return (
            <div key={id}>
              <p>Titel: {attributes.title}</p>
              <img src={`http://localhost:1337${url}`} alt={caption} />
              <p>Premiär : {attributes.realeasedate}</p>
              <p>Länd : {attributes.duration}</p>
              <p>Betyg: {attributes.rating}/10</p>
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
