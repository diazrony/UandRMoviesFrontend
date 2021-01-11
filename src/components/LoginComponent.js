import React from 'react'
import {Link} from "react-router-dom";

export const LoginComponent = (props) => {
    return (
        <div>
            <form>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="Email input" />
                    </div>
                </div>
                <p className="help is-danger">This email is invalid</p>
                <div className="field is-grouped">
                    <div className="control">
                        <button type="submit" className="button is-primary is-large ">Login</button>
                    </div>
                    <div className="control">
                        <Link to="/register" className="button is-primary is-large ">Register</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
