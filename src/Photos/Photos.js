import React from 'react';
import './Photos.css';



const photos = (props) => (
    <article onClick={props.clicked}>

        <h1>{props.author}</h1>
        <img className="Photo-small" src={props.title} alt={props.name}></img>
        <h1>{props.title}</h1>
        <h1>{props.author}</h1>
        <h1>{props.matt}</h1>
        <h1>SHOW: {props.showHide}</h1>

        <div className="Info">
            <div className="Author">{props.url}</div>
        </div>

    </article>
)

export default photos;