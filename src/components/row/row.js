import { useEffect, useState } from "react";

import { firebaseDatabase } from "../../firebase/firebase";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row(props) {
  const [movies, setMovies] = useState([]);

  const { title, movieType } = props;

  const leafRoot = "movies";
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    fetchMovies(movieType);
  }, []);

  const fetchMovies = (movieType) => {
    const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
    movieRef.on("value", (snapshot) => {
      const movies = snapshot.val();
      if (movies && movies.length !== 0) {
        setMovies(() => movies);
      }
    });
  };
  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
          console.log("Trailer", setTrailerUrl(urlParams.get('v')))
        })
        .catch(() => console.log("unavai"));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVar: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleTrailer(movie)}
            className="row__poster row__posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
