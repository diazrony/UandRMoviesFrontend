import React from 'react'
import { Header } from './Header'
import './styles/Layout.css';

export const Layout = (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            {props.children}
        </React.Fragment>
    )
}
