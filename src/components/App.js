import React, { useEffect, useReducer } from "react";
//import "./App.css";
import axios from "axios";

import Header from "./Header";
import Search from "./Search";
import Movie from "./Movie";

const MOVIE_API_URL = "http://www.omdbapi.com/?apikey=8a53c247&s=bat";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(MOVIE_API_URL)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: res.data.Search,
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    axios
      .get(`http://www.omdbapi.com/?apikey=8a53c247&s=${searchValue}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: res.data.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: res.data.Error,
          });
        }
      });
  };
  


  const { movies, errorMessage, loading } = state

  return (
    <div className="App container">
      <Header text="Buscador imdb" />
      <Search search={search} />
      <div className="row">
        {loading && !errorMessage ? (
          <span>Loading</span>
        ) : errorMessage ? (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        ) : (
              movies.map((movie, index) => <Movie key={index} movie={movie} />)
            )}
      </div>
    </div>
  );
}
export default App;
