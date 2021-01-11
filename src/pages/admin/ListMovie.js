import axios from 'axios';
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import { urlGeneral } from '../../environment/environment';
import { LoaderPage } from '../LoaderPage';

export default class ListMovie extends Component {
    state = {
        loading : true,
        movies : []
    }
    async fetchMovies() {
        let response = await axios.get(`${urlGeneral}/movie`)
        this.setState({movies:  response.data.movie, loading: false })
    }
    async componentDidMount() {
        await this.fetchMovies()
    }
    deleteMovie(idMovie, e) {
        e.preventDefault();
        axios.delete(`${urlGeneral}/movie/${idMovie}`).then( response => {
            Swal.fire('¡Bien!, Tu pelicula a sido eleminada', '','success')
            this.fetchMovies()
        }).catch(e => {
            console.log('Error', e);
            Swal.fire('Ocurrio un error al eliminar la pelicula', '','error')
        })
    }
    render() {
        if (this.state.loading === true) {
            return <LoaderPage/>
        }
        return (
            <div className='container mt-5'> 
                <div className="card mt-5">
                <h1 className='title is-1' >Movies</h1>
                <table className="table mt-5">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Categorie</th>
                                <th>Imagen</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.movies.map( (movie, acc) => {
                            return  (
                                <tr key={acc}>
                                    <td>{movie.name}</td>
                                    <td>{movie.categorie}</td>
                                    <td><img className='imgList' src={movie.urlImage} alt={movie.name}/></td>
                                    <td> <Link to={'/admin/editMovie/' + movie._id} className='button is-warning'> <i className="fas fa-edit"></i>  Edit  </Link> </td>
                                    <td> <button onClick={(e) => this.deleteMovie(movie._id, e)}  className='button is-danger'> <i className="fas fa-trash-alt"></i>  Delete  </button> </td>
                                </tr>   
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


