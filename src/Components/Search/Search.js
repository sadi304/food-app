import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './Search.css';
import { restRequest } from '../../Helpers/Request';
import Food from '../Food/Food';

class Search extends Component {
  state = {
    query: '',
    results: [],
    loading: false
  }

  async fetchSearchResults(query) {
    this.setState({ loading: true });

    try {
      const response = await restRequest('get', `search?q=chicken`);
      this.setState({ results: response.data.hits });
    } catch(error) {
      alert('there was an error.');
    }

    this.setState({ loading: false });

  }

  handleSearchInputOnChange = event => {
    const query = event.target.value;

    if(!query) {
      this.setState({ query, items: [] } );
      return;
    }
    this.setState({ query, loading: true }, () => {
      this.fetchSearchResults(query);
    });
  }

  renderResults() {
    const { results } = this.state;
    return(
      results.map((result, index) => (
        <Food 
          name={result.recipe.label}
          imageUrl={result.recipe.image}
          ingredients={result.recipe.ingredients}
        />
      ))
    )
  }

  render() {
    const { query } = this.state;

    return(
      <div className="search">
        <label className="search--label" htmlFor="search--input">
					<input
            className="search--input"
						type="text"
						value={query}
            placeholder="Search foods..."
            onChange={this.handleSearchInputOnChange}
					/>
          <FontAwesomeIcon icon={faSearch} className="search--icon" />
				</label>
        <div className="search--results">
          { this.renderResults() }
        </div>
      </div>
    )
  }
}

export default Search;