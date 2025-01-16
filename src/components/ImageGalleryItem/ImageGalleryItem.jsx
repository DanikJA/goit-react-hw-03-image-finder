import './ImageGalleryItem.css';

export const ImageGalleryItem = ({ webformatURL, onImageClick }) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="" onClick={onImageClick} />
    </li>
  );
};
