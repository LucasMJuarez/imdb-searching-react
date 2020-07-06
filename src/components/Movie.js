import React from "react";


const DEFAULT_IMAGE = "https://via.placeholder.com/300";
const IMDB_ENLACE = "https://www.imdb.com/title/";

const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_IMAGE : movie.Poster;
  const enlace = movie.imdbID
  return (
    <div className="col-md-4 p-3">
      <div className="card">
        <img src={poster} className="card-img-top" alt="imagen" />
        <div className="card-body">
          <div className="card-title">
            <h2>{movie.Title}</h2>
          </div>
          <div className="card-subtitle">
            <h4>
              {movie.Year}-{movie.Type}
            </h4>
            <button className="btn btn-light btn-sm">
              <a href={IMDB_ENLACE + enlace }>Enlace a imdb</a>
             </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
