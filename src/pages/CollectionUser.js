import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { urlGeneral } from '../environment/environment'
import { LoaderPage } from './LoaderPage'

export const CollectionUser = () => {
    let {user} = JSON.parse(window.localStorage.getItem('token'))
    let [movies, setMovies] = useState([])
    console.log(user);
    useEffect(() => {
        const fetchData = async () => {
            let response = await axios(`${urlGeneral}/user/${user._id}`)
            console.log("movies",response.data.user.movies);
            setMovies(response.data.user.movies)
        }
        fetchData()
    }, [])
    const deleteMovie = (idMovie, e) => {
        e.preventDefault();
        Swal.fire('Pelicula elemininada de tu colección', ``, 'success')

    }
    if (!movies) {
        return <LoaderPage/>
    }else {
        return (
            <div className="uandr-movies" >
                <div className="columns is-multiline">
                    {movies.map( (movie, acc) => {
                        return(
                            <div key={acc} className="column is-one-quarter">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={movie.urlImage} alt={movie.name}/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <h1> <b>{movie.name}</b> </h1>
                                                <p>{movie.categorie}</p>
                                            </div>
                                        </div>
    
                                        <div className="content">
                                            <div className="columns">
                                                <div className="column">
                                                    <Link to={'/detailMovie/' + movie._id} className="button is-success is-medium" >View</Link>
                                                </div>
                                                <div className="column">
                                                    <button onClick={(e) => deleteMovie(movie._id, e)} className="button is-danger is-medium">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    
}
