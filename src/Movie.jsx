import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './App.css';


const Movie = () => {
    const [movie, setMovie] = useState(null);
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const navigate = useNavigate()
    const { id } = useParams();
    
    const fetchShowDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/films/${id}`)
            setMovie(response.data)
            setTitle(response.data.title)
            setGenre(response.data.genre)
            setImage(response.data.image)
        } 
        catch (err) {
            console.error(err);
            setError(err);
        } 
        finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/films/${id}`, { title, genre, image });
            setMessage('Film mis à jour avec succès');
            setMovie(response.data);
        }
        catch (err) {
            console.error(err);
            setError('Erreur lors de la mise à jour du film');
        }
    };

    useEffect(() => {
        fetchShowDetail()
    }, [id])

    if (error) return <p>{error.message}</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div className="movie-detail">
            <button onClick={() => navigate('/') } >Home</button><br />
            <img src={movie.image} alt={movie.title} /><br />
            <h1>{movie.title}</h1>
            <p>Genre: {movie.genre}</p>
            <h2>Modifier le film</h2>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Titre : </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Genre : </label>
                    <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
                </div>
                <div>
                    <label>Lien Image : </label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
                </div>
            <button type="submit">Mettre à jour</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default Movie