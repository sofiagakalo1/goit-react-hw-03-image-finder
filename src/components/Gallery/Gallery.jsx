import { Component } from 'react';
// import axios from 'axios';
// import css from '../Gallery/gallery.module.css';

class Gallery extends Component {
  state = {
    images: [],
  };
  render() {
    return (
      <div>
        <header class="searchbar">
          <form class="form">
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>
            <input
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
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
