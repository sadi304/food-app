import React, { Component } from 'react';

import './Home.css';
import Search from '../../Components/Search/Search';

class Home extends Component {
  render() {
    return(
      <div className="home">
        <h4 className="home--title">Type any food you want to search about below</h4>
        <Search />
      </div>
    )
  }
}

export default Home;