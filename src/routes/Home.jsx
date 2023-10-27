import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";

/*CSS*/
import "./Home.css";

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    setMovies({ movies });
    setLoading(false);
  };
  useEffect(() => getMovies, []);
  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.movies.map((movie) => (
            <Movie
              key={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              x
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
