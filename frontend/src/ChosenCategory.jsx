import React from "react";

export default function ChosenCategory({
  categories,
  setValueToDisplay,
  setChosenLabel,
  chosenLabel,
  books,
  movies,
}) {
  let newBookObject = [];
  let newMovieObject = [];

  const filterResultFromCategories = categories.filter(
    (filterResultFromCategories) =>
      filterResultFromCategories.attributes.label === chosenLabel
  );

  for (let i = 0; i < books.length; i++) {
    for (
      let j = 0;
      j < filterResultFromCategories[0].attributes.books.data.length;
      j++
    ) {
      if (
        books[i].id ===
        filterResultFromCategories[0].attributes.books.data[j].id
      ) {
        newBookObject.push(books[i]);
      }
    }
  }
  for (let i = 0; i < movies.length; i++) {
    for (
      let j = 0;
      j < filterResultFromCategories[0].attributes.movies.data.length;
      j++
    ) {
      if (
        movies[i].id ===
        filterResultFromCategories[0].attributes.movies.data[j].id
      ) {
        newMovieObject.push(movies[i]);
      }
    }
  }

  return (
    <div>
      {filterResultFromCategories[0].attributes.books.data.length === 1
        ? `Det finns ${
            filterResultFromCategories[0].attributes.books.data.length
          } bok med genren ${chosenLabel.toLowerCase()}:`
        : filterResultFromCategories[0].attributes.books.data.length >= 1
        ? `Det finns ${
            filterResultFromCategories[0].attributes.books.data.length
          } böcker med genren ${chosenLabel.toLowerCase()}:`
        : `Det finns inga böcker med genren ${chosenLabel}.`}

      {newBookObject &&
        newBookObject.map(({ attributes }, id) => {
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
      <br></br>
      {filterResultFromCategories[0].attributes.movies.data.length === 1
        ? `Det finns ${
            filterResultFromCategories[0].attributes.movies.data.length
          } film med genren ${chosenLabel.toLowerCase()}:`
        : filterResultFromCategories[0].attributes.movies.data.length >= 1
        ? `Det finns ${
            filterResultFromCategories[0].attributes.movies.data.length
          } filmer med genren ${chosenLabel.toLowerCase()}:`
        : `Det finns inga filmer med genren ${chosenLabel}:`}

      {newMovieObject &&
        newMovieObject.map(({ attributes }, id) => {
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
