import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function FormAddFilm({ onFilmAdded }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/films', { title, genre, image });
      setMessage(`Film ajouté avec succès : ${response.data.title}`);
      setTitle('');
      setGenre('');
      setImage('');
      onFilmAdded(); // Appelle la fonction de rappel pour rafraîchir la liste des films
    } catch (err) {
      console.error(err);
      setMessage('Erreur lors de l\'ajout du film');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form-add-movie'>
        <div>
          <label>Titre : </label><br />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Genre : </label><br />
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Lien Image : </label><br />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ajouter le film</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}

export default FormAddFilm;
