import React from 'react';
import user from '../img/user.png';

export const Home = () => {
    return (
        <div className="body">
            <div className="container">
                <h1>Inicia Sesión</h1>
                <img src={user}></img>
                <input className="usuario" type="text" placeholder="Ingresa tu usuario"></input>
                <input className="contraseña" type="password" placeholder="  Ingresa tu contraseña"></input>
                <input className="boton" type="button" value="Iniciar Sesión"></input>
            </div>
        </div>
    )
}
