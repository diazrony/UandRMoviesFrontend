import React from 'react'
import createMovieL  from '../../img/svg/createMovie.svg';
//import listMovieL  from '../../img/svg/adminListMovie.svg';

import {Link} from "react-router-dom";


export const HomeAdmin = () => {
    let response = JSON.parse(window.localStorage.getItem('token')) 

    if( response === undefined || !response || response === null ) { 
        window.location.href = '/login'
    }else {
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
<<<<<<< HEAD
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
=======

                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-16by9">
                                <img src="" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-1">List Movies</p>
                                    <Link to="admin/list-movie" className="button is-large is-link">Navigate</Link>
>>>>>>> 0bd9600e8c76e016d655d42f98f61c51f49143f3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
