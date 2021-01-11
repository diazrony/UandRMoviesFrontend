import axios from 'axios'
import React, { Component } from 'react'
import { urlGeneral } from '../environment/environment'
import { LoaderPage } from './LoaderPage'

export default class DetailMovie extends Component {
    id = this.props.match.params.id
    state = {
        movie: {},
        loading : true
    }
    fetchData = async ()  => {
        let response = await axios.get(`${urlGeneral}/movie/${this.id}`)
        this.setState({ movie: response.data.movie ,loading: false })
    }
    componentDidMount() {
        this.fetchData()
        console.log(this.state.movie);
    }
    render() {
        if(!this.state.movie) {
            return <LoaderPage/>
        }
        return (
            <div className='uandr-movies'>
                <div className="columns">
                    <div className="column is-6 card">
                        <h1 className='title is-1'>{this.state.movie.name}</h1>
                        <h4 className='title is-4'>Description</h4>
                        <p>{this.state.movie.categorie}</p>
                        <h4 className='title is-4'>Categorie</h4>
                        <p>{this.state.movie.description}</p>
                    </div>
                    <div className="column is-6">
                        <iframe width="100%" height="100%" src={this.state.movie.urlMovie} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
