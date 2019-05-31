import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import plusSign from '../../images/plus.png';
import home from '../../images/web-page-home.png';
import Feed from '../Feed/Feed';

import './Home.css';


class Home extends Component {
  
  render() {
    return (
      <div className="home">
          <div id="header">
            <img id='home' src={home} alt='Home'/>
            <p>TO DO</p>
            <Link to='/add'><img id="add" src = {plusSign} alt='Add Item'/></Link>
          </div>
          <div id="feed">
            <Feed />
          </div>
      </div>
    );
  }
}


export default Home;