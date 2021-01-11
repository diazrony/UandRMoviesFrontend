import axios from 'axios';
import React, { Component } from 'react'
import { urlGeneral } from '../../environment/environment';
import CreateMovieImg from './../../img/svg/Create.svg'
import Swal from 'sweetalert2'

export default class CreateMovie extends Component {
    createMovie(e) {
        e.preventDefault();
        let name = document.querySelector('#name').value
        let description = document.querySelector('#description').value
        let categorie = document.querySelector('#categorie').value
        let urlMovie = document.querySelector('#urlMovie').value
        let urlImage =  document.querySelector('#urlImg').value
        const movie = { name, description,categorie,urlImage,urlMovie}
        axios.post(`${urlGeneral}/movie`, movie).then(response => {
            Swal.fire('¡Bien!, Tu pelicula esta creada', `${response.data.movie.name}`, 'success')
            document.querySelector('#name').value = ''
            document.querySelector('#description').value = ''
            document.querySelector('#urlMovie').value = ''
            document.querySelector('#urlImg').value = ''
            document.querySelector('#categorie').value = ''
        })
    }

    render() {
        return (
            <div className="mt-5">
                <div className="columns">
                    <div className="column is-6 card p-5">
                        <form className='p-5'>
                            <div className="field">
                                <label className="label">Name Movie</label>
                                <div className="control">
                                    <input  id='name' className="input" type="text" placeholder="Text input"/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Url Movie</label>
                                <div className="control">
                                <input  id='urlMovie' className="input" type="text" placeholder="Url Movie" />
                            </div>
                            </div>
                            <div className="field">
                                <label className="label">Url Image</label>
                                <div className="control">
                                    <input id='urlImg' className="input" type="email" placeholder="Url Image" />
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Categorie</label>
                                <div className="control">
                                    <div className="select">
                                    <select id='categorie' >
                                        <option>Select dropdown</option>
                                        <option value='Animación'>Animación</option>
                                        <option value='Musical'>Musical</option>
                                        <option value='Familiar'>Familiar</option>
                                        <option value='Comedia'>Comedia</option>
                                        <option value='Terror'>Terror</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Description</label>
                                <div className="control">
                                    <textarea id='description' className="textarea" placeholder="Description" />
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <button type="submit" onClick={this.createMovie} className="button is-link">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="column mt-5 is-6">
                        <img src={CreateMovieImg} alt="Create Movie"/>
                    </div>
                </div>
            </div>
        )
    }
}

