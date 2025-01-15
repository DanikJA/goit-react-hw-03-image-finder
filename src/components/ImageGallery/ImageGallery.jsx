import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul class="gallery">
      {images.map(images => (
        <ImageGalleryItem
          key={images.id}
          webformatURL={images.webformatURL}
          largeImageURL={images.largeImageURL}
        />
      ))}
    </ul>
  );
};
