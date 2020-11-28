import React from 'react'
import movies from './../services/moviesService'
export const Movie = (props) => {
    const { match: { params } } = props;
    let idMovie = params.id;

    return (
        <div className="uandr-movies">
            <div className="columns">
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={movies[idMovie].img} alt={movies[idMovie].title}/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card has-text-centered">
                        <h1 className="is-size-1" ><b>{movies[idMovie].title}</b></h1>
                        <h1 className="is-size-2" >{movies[idMovie].description}</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}
