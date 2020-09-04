import React from 'react';
import './Photos.css';
import GridListTile from '@material-ui/core/GridListTile';



const photos = (props) => (
    <div class="grid" onClick={props.clicked}>

        <div class="relative">

            <img src={props.url} alt={props.name} className="Photo-small"></img>
            {/* <h1>{props.title}</h1> */}



            {/* <div className="Info">
            <div className="Author">{props.url}</div>
        </div> */}
        </div>
    </div>


)

export default photos;