import React from 'react'

export const CreateMovie = () => {
    return (
        <div className="containerCreateMovie">
            <div className="formulario">
                <h1><b>Formulario Peliculas</b></h1>
                <div className="formpeli">
                    <p><b>Imagen</b></p>
                    <input type="file" />
                </div>
                <div className="formpeli">
                    <p><b>Nombre Pelicula</b></p>
                    <input type="text" />
                </div>
                <div className="formpeli">
                <p><b>Genero</b></p>
                    <select name="genero">
                        <option>Terror</option>
                        <option>Drama</option>
                        <option>Comedia</option>
                        <option>Accion</option>
                    </select>
                </div>
                <div className="formpeli">
                    <p><b>Url</b></p>
                    <input type="text" />
                </div>
                <br/><br/>
                <div className="formpeli">
                    <button>INGRESAR</button>
                </div>
            </div>
        </div>
    )
}
