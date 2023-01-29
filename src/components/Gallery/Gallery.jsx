import { Component } from 'react';
import css from '../Gallery/gallery.module.css';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';

import { getGalleryItems } from '../services/galleryApi';

class Gallery extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.setState({ loading: true });
      getGalleryItems(search)
        .then(data => this.setState({ items: data }))
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  async fetchItems() {}

  seachImages = ({ search }) => {
    this.setState({ search });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { items, loading, error } = this.state;
    const { closeModal } = this;
    return (
      <div className={css.Gallery}>
        <Searchbar onSubmit={this.seachImages} />
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {/* <ImageGallery items={items} /> */}
        <button>Load more</button>
        <Modal close={closeModal} />
      </div>
    );
  }
}

export default Gallery;
