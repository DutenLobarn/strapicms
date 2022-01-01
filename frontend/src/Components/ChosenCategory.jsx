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
  // I take to value that the user has chosen and used that in my categories.filter function
  // so im only saving the data in the variable filterResultFromCategories that i want to save.
  const filterResultFromCategories = categories.filter(
    (filterResultFromCategories) =>
      filterResultFromCategories.attributes.label === chosenLabel
  );
  //  I am saving the data i want in my newBookObject and newMovieObject, the data i want is the complete books and movies data
  // but narrowed down what label the user has chosen and to do that im using my variable from the filter function.
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
    <>
      {/* Using filterResultFromCategories to make it extra nice how many books there is to look. */}
      <h2>
        {filterResultFromCategories[0].attributes.books.data.length === 1
          ? `Det finns ${
              filterResultFromCategories[0].attributes.books.data.length
            } bok med genren ${chosenLabel.toLowerCase()}:`
          : filterResultFromCategories[0].attributes.books.data.length >= 1
          ? `Det finns ${
              filterResultFromCategories[0].attributes.books.data.length
            } böcker med genren ${chosenLabel.toLowerCase()}:`
          : `Det finns inga böcker med genren ${chosenLabel.toLowerCase()}.`}
      </h2>
      <section>
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
        {/* Using filterResultFromCategories to make it extra nice how many movies there is to look. */}
        <h2>
          {filterResultFromCategories[0].attributes.movies.data.length === 1
            ? `Det finns ${
                filterResultFromCategories[0].attributes.movies.data.length
              } film med genren ${chosenLabel.toLowerCase()}:`
            : filterResultFromCategories[0].attributes.movies.data.length >= 1
            ? `Det finns ${
                filterResultFromCategories[0].attributes.movies.data.length
              } filmer med genren ${chosenLabel.toLowerCase()}:`
            : `Det finns inga filmer med genren ${chosenLabel.toLowerCase()}:`}
        </h2>
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
                <p>
                  {" "}
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
    </>
  );
}
