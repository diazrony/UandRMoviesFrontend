import React from 'react';
import hlogo  from '../img/svg/home.svg';
import './styles/General.css'
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <div className="uandr">
            <div className="columns">
                <div className="column">
                    <img className="hlogo" src={hlogo} />
                </div>
                <div className="column">
                    <h1 className="is-size-1" ><b>¡Welcome!</b></h1>
                    <h2 className="is-size-2">This is our movies platform</h2>
                    <h2 className="is-size-2"><b>Join us to get free movies</b></h2>
                    <br/>
                    <Link to="/login" className="button is-primary is-large" >Join</Link>
                </div>
            </div>
        </div>
    );
}
