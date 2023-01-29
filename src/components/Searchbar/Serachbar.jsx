import { Component } from 'react';
import css from './searchbar.modules.css';

class Searchbar extends Component {
  render() {
    return (
      <header className={css.searchbar}>
        <form className="form">
          <button type="submit" className={css.button}>
            <span className={css.button_label}>Search</span>
          </button>
          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
