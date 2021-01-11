import React from 'react'
import './styles/General.css'
import authentication from "../img/svg/authentication.svg";
import GoogleLogin from 'react-google-login'
import axios from 'axios';
import { urlGeneral } from '../environment/environment';

export const Login = (props) => {
    const responseSuccessGoogle = (res) => {
        console.log(res);
        axios.post(`${urlGeneral}/google`, {idtoken: res.tokenId})
            .then( res => {
                window.localStorage.setItem('token', JSON.stringify(res.data));
                props.history.push('/admin')
            })
            .catch(e => console.log(e))
    }
    const responseErrorGoogle = (res) => {
        console.log(res);
    }
    return (
            <div className="uandr-login">
                <div className="columns">
                    <div className="column">
                        <h1 className="is-size-1" ><b>Login</b></h1>
                        <GoogleLogin
                            clientId="486105028590-uudenu4qbnencsiec6tb67fpmov3r0jj.apps.googleusercontent.com"
                            buttonText="Register / Login with Google"
                            onSuccess={responseSuccessGoogle}
                            onFailure={responseErrorGoogle}
                            cookiePolicy={'single_host_origin'}
                            className='google-btn mt-5'
                        />
                    </div>
                    <div className="column  has-text-centered">
                        <img className="hlogo" src={authentication} alt='login' />
                    </div>
                </div>
            </div>
    )
}
