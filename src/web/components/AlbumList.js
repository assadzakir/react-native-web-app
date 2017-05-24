import React, { Component } from 'react';
import { AlbumApi } from '../../constants/api';

class AlbumList extends Component {
   

    
    render() {
     let albumApi = new AlbumApi();
     let albumList = albumApi.fetchAlbumList()
    return(
        <div>
        <h1> Album List !!!!!</h1>
        </div>    
    )
    }
}

export default AlbumList;