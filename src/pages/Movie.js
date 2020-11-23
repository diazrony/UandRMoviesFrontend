import React from 'react'

export const Movie = (props) => {
    const {match: { params }} = props;
    let idMovie = params.id;
    return (
        <div>
            {idMovie}
        </div>
    )
}
