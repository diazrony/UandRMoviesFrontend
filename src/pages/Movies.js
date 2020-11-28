import React from 'react'
import movies from './../services/moviesService'
import {Link} from "react-router-dom";
export const Movies = (props) => {
    return (
        <div className="uandr-movies" >
            <div className="columns is-multiline">
                {movies.map( (movie, acc) => {
                 return(
                     <div key={acc} className="column is-one-quarter">
                         <div className="card">
                             <div className="card-image">
                                 <figure className="image is-4by3">
                                     <img src={movie.img} alt={movie.title}/>
                                 </figure>
                             </div>
                             <div className="card-content">
                                 <div className="media">
                                     <div className="media-content">
                                         <h1> <b>{movie.title}</b> </h1>
                                         <p>{movie.description}</p>
                                     </div>
                                 </div>

                                 <div className="content">
                                     <div className="columns is-mobile">
                                         <div className="column">
                                                <button className="button is-primary is-medium" >Add</button>
                                         </div>
                                         <div className="column">
                                             <Link to={'movie/' + acc} className="button is-warning is-medium" >Detalle</Link>
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
