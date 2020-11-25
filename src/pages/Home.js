import React from 'react';
import './styles/Home.css'
import movies from '../services/moviesService'
export const Home = () => {
    return (
        <div className="section">
            <div className="container-movies">
                {movies.map( movie => {
                    return (
                    <div className="pelicula">
                        <h3>{movie.title}</h3>
                        <div className="pelicula-img-container">
                            <img src={movie.img} alt={movie.title}/>
                        </div>
                        <p>{movie.description}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}
