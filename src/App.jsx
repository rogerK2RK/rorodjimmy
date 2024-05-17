import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:3000/films');
      setMovies(response.data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>Liste des films</h1>
      <div className="movies-container">
        {movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
