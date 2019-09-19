import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { restRequest } from '../../Helpers/Request';
import Food from '../Food/Food';
import Loader from '../Loader/Loader';

import './Search.css';

class Search extends Component {
  state = {
    query: '',
    results: [],
    loading: false
  }
  
  constructor() {
    super();
    this.fetchSearchResults = debounce(this.fetchSearchResults, 500);
  }

  async fetchSearchResults(query) {
    this.setState({ loading: true });

    try {
      const response = await restRequest('get', `search?q=${query}`);
      this.setState({ results: response.data.hits });
    } catch(error) {
      alert('there was an error.');
    }

    this.setState({ loading: false });

  }

  handleSearchInputOnChange = event => {
    const query = event.target.value;
    this.setState({ query });
    this.fetchSearchResults(query);
  }

  renderResults() {
    const { results, loading } = this.state;
    if(loading) return <Loader />;
    return(
      results.map((result, index) => (
        <Food 
          key={index}
          name={result.recipe.label}
          imageUrl={result.recipe.image}
          ingredients={result.recipe.ingredientLines}
          nutrients={result.recipe.totalNutrients}
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