import React from 'react'

export const LoginComponent = (props) => {
    return (
        <div>
            <h1 className="is-size-1" ><b>Login</b></h1>
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
                </div>
            </form>
        </div>
    )
}
