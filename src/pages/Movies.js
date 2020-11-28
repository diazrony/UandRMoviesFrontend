import React from 'react'
import movies from './../services/moviesService'
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
                                     <img src={movie.img} alt="Placeholder image"/>
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
                                     <div className="columns">
                                         <div className="column">
                                                <button className="button is-primary is-medium" >Add</button></div>
                                         <div className="column"></div>
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
