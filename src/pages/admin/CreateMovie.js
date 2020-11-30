import React from 'react';
import '../styles/General.css';
import Form from '../admin/Form.svg';

export const CreateMovie = () => {
    return (
        <div className="create-movie">
            <div className="columns">
                <div className="column is-half">
                    <h1 className="is-size-1" ><b>Create Movie</b></h1>
                    <form>
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Title" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Review</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Sinopsis" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Image URL</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Url de la Imagen" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Video Url - Youtube</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Url del Video - Youtube" />
                            </div>
                        </div>

                        <div className="control">
                            <button className="button is-success">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="column is-half">
                    <img  className="Formimg" src={Form}></img>
                </div>
            </div>
        </div>
    )
}
