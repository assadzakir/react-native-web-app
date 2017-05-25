import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';


const AlbumDetails = (props) => {
    const title = (
        <h3>{props.album.title}</h3>
    );
    return (
        <Panel header={title} >
            {props.album.artist}
        </Panel>
    )
}

export default AlbumDetails;