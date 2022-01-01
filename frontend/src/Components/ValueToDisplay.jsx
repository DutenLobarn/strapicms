import React, { useState, useEffect } from "react";

import Books from "./Books";
import Movies from "./Movies";
import Categories from "./Categories";
import ChosenCategory from "./ChosenCategory";

// This component is fetching all data and also the one displaying what data the user wants to look at from the navigation component.
// This component is also sending data to its children.

export default function ValueToDisplay({ valueToDisplay, setValueToDisplay }) {
  const [categories, setCategories] = useState("");
  const [books, setBooks] = useState();
  const [movies, setMovies] = useState();
  const [chosenLabel, setChosenLabel] = useState("");

  useEffect(() => {
    fetch("http://localhost:1337/api/labels?populate=*")
      .then((response) => {
        return response.json();
      })
      .then((data) => setCategories(data.data));
    fetch("http://localhost:1337/api/books?populate=*")
      .then((response) => {
        return response.json();
      })
      .then((data) => setBooks(data.data));
    fetch("http://localhost:1337/api/movies?populate=*")
      .then((response) => {
        return response.json();
      })
      .then((data) => setMovies(data.data));
  }, []);

  return (
    <div>
      {valueToDisplay === "Böcker och Filmer" ? (
        <>
          <h2>Böcker</h2>
          <Books
            books={books}
            setValueToDisplay={setValueToDisplay}
            setChosenLabel={setChosenLabel}
          />
          <h2>Filmer</h2>
          <Movies
            movies={movies}
            setValueToDisplay={setValueToDisplay}
            setChosenLabel={setChosenLabel}
          />
        </>
      ) : valueToDisplay === "Böcker" ? (
        <>
          <h2>Böcker</h2>
          <Books
            books={books}
            setValueToDisplay={setValueToDisplay}
            setChosenLabel={setChosenLabel}
          />
        </>
      ) : valueToDisplay === "Filmer" ? (
        <>
          <h2>Filmer</h2>
          <Movies
            movies={movies}
            setValueToDisplay={setValueToDisplay}
            setChosenLabel={setChosenLabel}
          />
        </>
      ) : valueToDisplay === "ChosenCategory" ? (
        <ChosenCategory
          categories={categories}
          setValueToDisplay={setValueToDisplay}
          chosenLabel={chosenLabel}
          setChosenLabel={setChosenLabel}
          books={books}
          movies={movies}
        />
      ) : valueToDisplay === "Genrer" ? (
        <Categories
          categories={categories}
          setValueToDisplay={setValueToDisplay}
          setChosenLabel={setChosenLabel}
        />
      ) : (
        ""
      )}
    </div>
  );
}
