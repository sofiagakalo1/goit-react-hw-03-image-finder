import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import css from './imageGallery.module.css';

const ImageGallery = ({ items, openModal }) => {
  const images = items.map(({ id, tags, webformatURL, largeImageURL }) => (
    <ImageGalleryItem
      id={id}
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
