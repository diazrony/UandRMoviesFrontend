import React from 'react'
import user from '../img/user.png';
import './styles/Login.css';
export const Login = () => {
    return (
            <div className="login">
                <div className="card">
                <form className="card-form">
                    <h1>Inicia Sesión</h1>
                    <img src={user}></img>
                    <input className="input-login" type="text" placeholder="Ingresa tu usuario"></input>
                    <input className="input-login" type="password" placeholder="  Ingresa tu contraseña"></input>
                    <button className="boton" type="submit">Iniciar Sesión</button>
                </form>
                </div>
            </div>
    )
}
