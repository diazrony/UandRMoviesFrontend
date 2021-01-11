import axios from 'axios'
import React, { Component } from 'react'
import { urlGeneral } from '../../environment/environment'
import { LoaderPage } from '../LoaderPage'
import CreateMovieImg from './../../img/svg/Create.svg'
import Swal from 'sweetalert2'

export default class EditMovie extends Component {
    id = this.props.match.params.id
    state = {
        movie: {},
        loading : true
    }
    async fetchData() {
        let response = await axios.get(`${urlGeneral}/movie/${this.id}`)
        this.setState({ movie: response.data.movie ,loading: false }) 
    }
    async componentDidMount() {
        await this.fetchData()
        console.log(this.state.movie);
    }
    handlerOnChange = e =>  {
        console.log({[e.target.name]: e.target.value});
        this.setState({
            movie: {
                ...this.state.movie,
                [e.target.name] : e.target.value
            } 
        })
        console.log(this.state);
    }
    editMovie = e => {
        e.preventDefault();
        axios.put(`${urlGeneral}/movie/${this.id}`,this.state.movie).then(response => {
            Swal.fire('¡Bien!, Pelicula Editada', `${response.data.movie.name}`, 'success')
            this.props.history.push('/admin')
        })
    }

    render() {
        if (this.state.loading === true) {
            return <LoaderPage/>
        }
        return (
            <div className="mt-5">
                <div className="columns">
                    <div className="column is-6 card p-5">
                        <form className='p-5'>
                            <div className="field">
                                <label className="label">Name Movie</label>
                                <div className="control">
                                    <input  name='name' onChange={this.handlerOnChange} className="input" value={this.state.movie.name} type="text" placeholder="Text input"/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Url Movie</label>
                                <div className="control">
                                <input  name='urlMovie' 
                                        onChange={this.handlerOnChange} 
                                        value={this.state.movie.urlMovie} 
                                        className="input" type="text" placeholder="Url Movie" />
                            </div>
                            </div>
                            <div className="field">
                                <label className="label">Url Image</label>
                                <div className="control">
                                    <input name='urlImage' 
                                        onChange={this.handlerOnChange} 
                                        value={this.state.movie.urlImage} 
                                        className="input" type="email" 
                                        placeholder="Url Image" />
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Categorie</label>
                                <div className="control">
                                    <div className="select">
                                    <select value={this.state.movie.categorie} 
                                            onChange={this.handlerOnChange} 
                                            name='categorie' >
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
                                    <textarea value={this.state.movie.description}
                                            onChange={this.handlerOnChange}
                                            name='description' 
                                            className="textarea" 
                                            placeholder="Description" />
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <button type="submit"  onClick={this.editMovie} className="button is-link">Submit</button>
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
