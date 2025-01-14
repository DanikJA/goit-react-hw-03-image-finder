import React from 'react';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  openModal,
}) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="" onClick={() => openModal(largeImageURL)} />
    </li>
  );
};
