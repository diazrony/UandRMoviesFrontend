import React from 'react'
import createMovieL  from '../../img/svg/createMovie.svg';
import listMovieL  from '../../img/svg/adminListMovie.svg';

import {Link} from "react-router-dom";


export const HomeAdmin = () => {
    return (
        <div className="uandr-movies">
            <div className="columns">
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-16by9">
                                <img src={createMovieL} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-1">Create Movie</p>
                                    <Link to="admin/create-movie" className="button is-large is-link">Navigate</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-16by9">
                                <img src={listMovieL} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-1">List Movies</p>
                                    <Link to="admin/list-movie" className="button is-large is-link">Navigate</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
