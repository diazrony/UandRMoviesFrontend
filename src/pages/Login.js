import React from 'react'
import './styles/General.css'
import authentication from "../img/svg/authentication.svg";
import {LoginComponent} from "../components/LoginComponent";
export const Login = () => {
    return (
            <div className="uandr-login">
                <div className="columns">
                    <div className="column">
                        <LoginComponent/>
                    </div>
                    <div className="column  has-text-centered">
                        <img className="hlogo" src={authentication} />
                    </div>
                </div>
            </div>
    )
}
