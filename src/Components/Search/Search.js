import React, { Component } from 'react';


class Search extends Component {
  render() {
    return(
      <div className="search">
        <label className="search--label" htmlFor="search--input">
					<input
						type="text"
						value=""
						id="search--input"
						placeholder="Search..."
					/>
				</label>
      </div>
    )
  }
}

export default Search;