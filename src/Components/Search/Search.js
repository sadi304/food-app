import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './Search.css';
import { restRequest } from '../../Helpers/Request';

class Search extends Component {
  state = {
    query: '',
    items: [],
    loading: false
  }

  async fetchSearchResults(query) {
    this.setState({ loading: true });

    try {
      const results = await restRequest('get', `search?q=chicken`);
      this.setState({ items: results });
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
      </div>
    )
  }
}

export default Search;