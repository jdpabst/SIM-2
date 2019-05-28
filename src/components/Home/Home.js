import React, { Component } from 'react';
import plusSign from '../../images/plus.png';
import home from '../../images/web-page-home.png';
import Feed from '../Feed/Feed';

import './Home.css';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(e){
    console.log(e);
    this.setState({
      items: [...this.state.items, ...e.target.value]
    })
    console.log(this.state.items);
  }

  render() {
    return (
      <div className="home">

          <div id="header">
            <img id='home' src={home} alt='Home'/>
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/anton-saputro" title="Anton Saputro">Anton Saputro</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
            <p>TO DO</p>
            <img id="add" src = {plusSign} alt='Add Item'/>
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
          </div>
          <div id="feed">
            <Feed />
          </div>
      </div>
    );
  }
}


export default Home;