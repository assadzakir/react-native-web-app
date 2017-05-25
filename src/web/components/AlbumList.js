import React, { Component } from 'react';
import AlbumDetails from './AlbumDetails';
import { AlbumApi } from '../../constants/api';

class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        let albumApi = new AlbumApi();
        albumApi.fetchAlbumList().then(value => this.setState({ albums: value }))
    };

    renderAlbums() {
        return this.state.albums.map((album, key) => <AlbumDetails key={key} album={album} />)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.renderAlbums()}
            </div>
        )
    }
}

export default AlbumList;