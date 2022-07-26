import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function Movies({
  handleSaveMovie,
  handleUnSaveMovie,
  recivedMoives,
  isLoading,
  counter,
  moreMovies,
  loadMoreMovies,
  isSavedMoviesSection,
  isMainMoviesSection,
  savedMovies,
  findMovies,
  activateToggle,
  isToggleActiveMoives,
  value
}) {
  return (
    <>
      <SearchForm
        findMovies={findMovies}
        activateToggle={activateToggle}
        isToggleActiveMoives={isToggleActiveMoives}
        recivedMoives={recivedMoives}
      />
      {recivedMoives ? recivedMoives.length === 0 ? null : (
        <MoviesCardList
          handleSaveMovie={handleSaveMovie}
          handleUnSaveMovie={handleUnSaveMovie}
          recivedMoives={recivedMoives}
          isLoading={isLoading}
          counter={counter}
          moreMovies={moreMovies}
          loadMoreMovies={loadMoreMovies}
          isSavedMoviesSection={isSavedMoviesSection}
          isMainMoviesSection={isMainMoviesSection}
          savedMovies={savedMovies}
          value={value}
        />
      ) : null}
    </>
  );
}
