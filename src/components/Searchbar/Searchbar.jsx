import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './searchbar.modules.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  //search is name of input that can be changed (if we have input with another name,
  // it will be setstated for it's name in state(state={view:''}, input name="view")),
  // we do that for case if we had more than one input for not changing function handleChange.

  handleChande = ({ target }) => {
    // console.log(target);
    console.log(target.value);
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit({ ...this.state });
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset() {
    this.setState({ search: '' });
  }

  render() {
    const { search } = this.state;
    const { handleChande, handleSubmit } = this;

    return (
      <header className={css.searchbar}>
        <form onSubmit={handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.button_label}>Search</span>
          </button>
          <input
            onChange={handleChande}
            value={search}
            className={css.input}
            required
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
