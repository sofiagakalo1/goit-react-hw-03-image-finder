import { Component } from 'react';
import css from '../Gallery/gallery.module.css';

import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import Loader from '../Loader';

import { getGalleryItems } from '../services/galleryApi';

class Gallery extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    showModal: false,
    modalImg: '',
    page: 1,
    totalPages: 1,
    perPage: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchItems();
    }
  }

  async fetchItems() {
    try {
      const { search, page, perPage } = this.state;
      this.setState({ loading: true });
      const { hits, totalHits } = await getGalleryItems(search, page, perPage);
      this.calcTotalPages(totalHits);
      this.setState(({ items }) => ({ items: [...items, ...hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  seachImage = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  openModal = bigImg => {
    this.setState({ showModal: true, modalImg: bigImg });
  };

  closeModal = () => {
    this.setState({ showModal: false, modalImg: '' });
  };

  calcTotalPages = totalHits => {
    const { perPage } = this.state;
    let pages = Math.floor(totalHits / 12);
    pages = totalHits % perPage ? pages + 1 : pages;
    console.log(pages);
    this.setState({ totalPages: pages });
  };

  render() {
    const { items, loading, error, modalImg, showModal, totalPages, page } =
      this.state;
    const { openModal, closeModal, loadMore, seachImage } = this;
    return (
      <div className={css.Gallery}>
        <Searchbar onSubmit={seachImage} />
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        <ImageGallery items={items} openModal={openModal} />
        <Loader
          loading={loading}
          page={page}
          totalPages={totalPages}
          loadMore={loadMore}
        />
        {showModal && <Modal close={closeModal} bigImg={modalImg} />}
      </div>
    );
  }
}

export default Gallery;
