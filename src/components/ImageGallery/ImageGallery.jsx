import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import css from './imageGallery.module.css';

const ImageGallery = ({ items, openModal }) => {
  const images = items.map(({ id, tags, webformatURL, largeImageURL }) => (
    <ImageGalleryItem
      key={id}
      tags={tags}
      webformatURL={webformatURL}
      openModal={() => openModal(largeImageURL)}
    />
  ));
  return <ul className={css.imageGallery}>{images}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};
