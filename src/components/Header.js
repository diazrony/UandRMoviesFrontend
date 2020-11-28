import React from 'react'
import {Link} from "react-router-dom";
export const Header = () => {
    const [isActive, setisActive] = React.useState(false);

    return (
        <div>
            <nav className="navbar container" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to='/' className="navbar-item">
                        <h3> <b>UandRMovies</b> </h3>
                    </Link>
                    <Link to="/"
                        onClick={() => {
                            setisActive(!isActive);
                        }}
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>

                <div id="navbarBasicExample"  className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <Link to='/' className="navbar-item">
                            Home
                        </Link>
                        <Link to='/collection' className="navbar-item">
                            Colletion
                        </Link>
                        <Link to='/admin' className="navbar-item">
                            Admin
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to="register" className="button is-primary">
                                    <strong>Sign up</strong>
                                </Link>
                                <Link to="login" className="button is-light">
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
