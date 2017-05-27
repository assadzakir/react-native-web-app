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
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Albums Gallery</h1>
          </div>
          {this.renderAlbums()}
        </div>
      </div>
    )
  }
}

export default AlbumList;
