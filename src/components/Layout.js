import React from 'react'
import { Header } from './Header'

export const Layout = (props) => {
    return (
        <div className="layout">
            <React.Fragment>
                <Header></Header>
                {props.children}
            </React.Fragment>
        </div>     
    )
}
