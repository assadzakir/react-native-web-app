import React, { Component } from 'react';
import { AlbumApi } from '../../constants/api';
import { View, Text } from 'react-native';
import AlbumDetials from './AlbumDetails';

class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        let albumApi = new AlbumApi();
        albumApi.fetchAlbumList().then(value => this.setState({ albums: value }))
    };

    renderAlbums() {
        return this.state.albums.map((album, key) => <AlbumDetials key={key} album={album} />)
    }
    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}


export default AlbumList;