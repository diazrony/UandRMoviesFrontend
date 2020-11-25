import React from 'react'
import './styles/Movie.css'

export const Movie = (props) => {
    const { match: { params } } = props;
    let idMovie = params.id;
    return (
        <div className="sectionImg">
            {idMovie}
            <div className="sectionPeli">
                <div className="Peli"></div>
            </div>
            <div className="containerInfo">
                <div className="sectionInfo">
                    <div className="titulo">
                        {/* <h1>T I T U L O</h1> */}
                    T I T U L O
                </div>
                    <div className="año">
                        1990
                </div>
                    <div className="sipnosis">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, dolores architecto sint sed ut iste nulla fugit, commodi, accusantium laborum ullam cumque nemo corporis. Dicta assumenda et quibusdam amet nemo.
                        Animi adipisci excepturi, possimus laboriosam error est tempore quae iste culpa dicta distinctio ea expedita similique amet exercitationem reprehenderit doloremque numquam eveniet unde accusamus temporibus facilis sint officiis! Suscipit, similique.
                </div>
                    <div className="estrellas">
                        <div className="estrella">☆</div>
                        <div className="estrella">☆</div>
                        <div className="estrella">☆</div>
                        <div className="estrella">☆</div>
                        <div className="estrella">☆</div>
                    </div>
                    <div className="botones">
                        <div className="botonInfo">
                            <button>Rentar Pelicula</button>
                        </div>
                        <div className="botonInfo">
                            <button>Comprar Pelicula</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
