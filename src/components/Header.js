import React from 'react'
import {Link} from "react-router-dom";
import { GoogleLogout } from 'react-google-login';
export const Header = () => {
    const [isActive, setisActive] = React.useState(false);
    const [islogin, setIsLogin] = React.useState(false);
    const [userS, setuserS] = React.useState({})
    const logoutGoogle = () => {
        window.localStorage.removeItem('token')
        window.location.href = '/'
    }
    let intervalLogin = setInterval(() => {
        let response = JSON.parse(window.localStorage.getItem('token')) 
        if(response !== undefined && response) {
            setIsLogin(true)
            let {user} = JSON.parse(window.localStorage.getItem('token'))
            setuserS(user)
        }else {
            setIsLogin(false)
        }
        if(islogin) {
            clearInterval(intervalLogin);
        }
    }, 3000 );
    return (
        <div>
            <nav className="navbar container" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to='/' className="navbar-item">
                        <h3> <b>UandRMovies</b> </h3>
                    </Link>
                    <button
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
                    </button>
                </div>

                <div id="navbarBasicExample"  className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <Link onClick={() => {setisActive(!isActive)}} to='/' className="navbar-item">
                            Home
                        </Link>
                        <Link onClick={() => {setisActive(!isActive)}} to='/movies' className="navbar-item">
                            Movies
                        </Link>
                        {islogin && (
                            <Link onClick={() => {setisActive(!isActive)}} to='/collection' className="navbar-item">
                            Colletion
                            </Link>
                        )}
                        {islogin && (
                            <Link onClick={() => {setisActive(!isActive)}} to='/admin' className="navbar-item">
                                Admin
                            </Link>
                        )}
                        
                        
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item"> 
                            <div className="buttons">
                                {islogin && (
                                    <h1 className='button is-primary' > {userS.name} </h1>
                                )}
                                {islogin && (
                                    <p className="control">
                                        <GoogleLogout
                                        clientId="486105028590-uudenu4qbnencsiec6tb67fpmov3r0jj.apps.googleusercontent.com"
                                        buttonText="Cerrar Sessión"
                                        onLogoutSuccess={logoutGoogle}
                                        />
                                    </p>
                                )}
                                {!islogin && (
                                    <Link to="login" className="button is-primary">
                                    Login
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
