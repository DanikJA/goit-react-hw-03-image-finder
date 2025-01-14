import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};
