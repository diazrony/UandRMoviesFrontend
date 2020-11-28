import React from 'react'
import lregister from "../img/svg/register.svg";
import {RegisterComponent} from "../components/RegisterComponent";

export const Register = (props) => {
    return (
        <div>
            <div className="uandr-login">
                <div className="columns">
                    <div className="column">
                        <RegisterComponent/>
                    </div>
                    <div className="column  has-text-centered">
                        <img className="hlogo" src={lregister} />
                    </div>
                </div>
            </div>
        </div>

    )
}
