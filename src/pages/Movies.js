import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import Swal from 'sweetalert2';
import { urlGeneral } from '../environment/environment';
import { LoaderPage } from './LoaderPage';
export const Movies = (props) => {
    const [movies, setmovies] = useState([{}])
    const [islogin, setIsLogin] = React.useState(false);
    const [userS, setuserS] = React.useState({})
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`${urlGeneral}/movie/`)
            setmovies(result.data.movie)
        }
        fetchData()
        console.log('movies', movies)
    },[])
    let intervalLogin = setInterval(() => {
        let response = JSON.parse(window.localStorage.getItem('token')) 
        if(response !== undefined && response) {
            setIsLogin(true)
            let {user} = JSON.parse(window.localStorage.getItem('token'))
            setuserS(user)
        }else {
            setIsLogin(false)
        }
        if(islogin) {
            clearInterval(intervalLogin);
        }
    }, 3000 );
    const addMovie = async (idMovie, e) => {
        e.preventDefault();
        console.log('idMovie', idMovie);
        console.log('idUser', userS._id);
        axios.put(`${urlGeneral}/user/${userS._id}`, {idMovie}).then( response => {
            Swal.fire('¡Bien!, Pelicula Agregada', ``, 'success')
        }).catch(e => {
            Swal.fire('Sucedio un error', `${e}`, 'error')
        })
    }

    if(!movies) {
        return <LoaderPage/>
    }else {
        return (
            <div className="uandr-movies" >
                <div className="columns is-multiline">
                    {movies.map( (movie) => {
                        return(
                            <div key={movie._id} className="column  is-6-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                                <div className="card card-heigth">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={movie.urlImage} alt={movie.name}/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <h1> Name: <b>  {movie.name}</b> </h1>
                                                <p> <b>Categorie:</b> {movie.categorie}</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="columns is-mobile">
                                                {islogin && (
                                                    <div className="column">
                                                        <button onClick={(e) => addMovie(movie._id, e)} className="button is-primary is-medium" >Add</button>
                                                    </div>
                                                )}
                                                <div className="column">
                                                    <Link to={'movie/' + movie._id} className="button is-warning is-medium" >Detalle</Link>
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
