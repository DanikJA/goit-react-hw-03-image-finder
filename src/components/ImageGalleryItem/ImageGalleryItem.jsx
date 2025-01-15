export const ImageGalleryItem = ({ key, webformatURL, largeImageURL }) => {
  return (
    <li class="gallery-item">
      <img src={webformatURL} alt="" />
    </li>
  );
};
