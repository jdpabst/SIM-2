import React, { Component } from 'react';
import axios from 'axios';

import './Feed.css';


class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {
      feed: []
    }

    this.getFeed = this.getFeed.bind(this)
  }

  componentDidMount(){
    this.setState({
      feed: localStorage.feed ? JSON.parse(localStorage.feed) : []
    })
    this.getFeed();
  }

  getFeed(){
    axios.post('/api/items').then( res => {
      console.log(res.data);
      this.setState({
        feed: [...this.state.feed, ...res.data]
      })
      // cache the feed locally //
      localStorage.feed = JSON.stringify(res.data)
    })
  }

  render() {
    let arr = this.state.feed;

    return (
      <div className="feed">
        {arr.map( (item, id) => {
          return <div key={id} id='main-container'>
          <p id='title'>{item.title}</p>
          <p id='content'>{item.item}</p>
        </div>
        })}
        
      </div>
    );
  }
}


export default Feed;