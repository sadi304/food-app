import React, { Component } from 'react';

import Search from '../../Components/Search/Search';

import './Home.css';

class Home extends Component {
  render() {
    return(
      <div className="home">
        <h2 className="home--title">FOOD APP v1.0.0</h2>
        <Search />
      </div>
    )
  }
}

export default Home;