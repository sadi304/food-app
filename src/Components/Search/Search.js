import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './Search.css';

class Search extends Component {
  render() {
    return(
      <div className="search">
        <label className="search--label" htmlFor="search--input">
					<input
            className="search--input"
						type="text"
						value=""
						placeholder="Search foods..."
					/>
          <FontAwesomeIcon icon={faSearch} className="search--icon" />
				</label>
      </div>
    )
  }
}

export default Search;