import { Component } from 'react';
// import axios from 'axios';
import css from '../Gallery/gallery.module.css';
import Searchbar from '../Searchbar';

class Gallery extends Component {
  state = {
    images: [],
  };
  render() {
    return (
      <div className={css.Gallery}>
        <Searchbar />
        <ul class="gallery">
          <li class="gallery-item">
            <img src="" alt="" />
          </li>
        </ul>
        <button>Load more</button>
      </div>
    );
  }
}

export default Gallery;
