import React from 'react';
import { Panel, Button } from 'react-bootstrap';


const AlbumDetails = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  const titles = (
    <h3>{title}</h3>
  );
  return (
    <div className="col-lg-6 col-md-6 col-xs-6 thumb" style={{ marginBottom: 30 }}>
      <h3>{title}</h3>
      <a className="thumbnail" target='_blank' href={url}>
        <img className="img-responsive" src={image} alt="" />
      </a>
      <Button>
        <a target='_blank' href={url}>
          Buy Now
         </a>
      </Button>
    </div>
  )
}

export default AlbumDetails;
