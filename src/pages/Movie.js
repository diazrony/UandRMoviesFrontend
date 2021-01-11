import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { urlGeneral } from '../environment/environment';
import movies from './../services/moviesService'
import { LoaderPage } from './LoaderPage';
export const Movie = (props) => {
    const { match: { params } } = props;
    const [movie, setmovie] = useState({})
    let idMovie = params.id;
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`${urlGeneral}/movie/${idMovie}`)
            setmovie(result.data.movie)
        }
        fetchData()
    }, [])
    
    if( !movie ) {
        return <LoaderPage/>
    }else {
        return (
            <div className="uandr-movies">
                <h1 className='title is-1'>Si quieres ver la pelicula completa registrate                 <Link className='button is-primary is-large' to={'/login'} > Login</Link>
 </h1>
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={movie.urlImage} alt={movie.name}/>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card has-text-centered">
                            <h1 className="is-size-1" ><b>{movie.name}</b></h1>
                            <h1 className="is-size-4" ><b>Description</b></h1>
                            <p>{movie.description}</p>
                            <h1 className="is-size-4" ><b>Categorie</b></h1>
                            <p className="is-size-5">{movie.categorie}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
