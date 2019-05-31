import React, { Component } from 'react';
import axios from 'axios';
import trash from '../../images/trash.png';

import './Feed.css';


class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {
      feed: [],
    }

    this.getFeed = this.getFeed.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateFeedAndCache = this.updateFeedAndCache.bind(this);
  }

  componentDidMount(){
    this.setState({
      // second part of cacheing the feed to help initial load time //
      feed: localStorage.feed ? JSON.parse(localStorage.feed) : []
    })
    this.getFeed();
  }

  getFeed(){
    let arr = this.state.feed;
    axios.post('/api/items').then( res => {
      console.log(res.data);
      for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < res.data.length; j++){
          if(arr[i].id === res.data[j].id){
            res.data.splice(j,1);
            j--;
          }
        }
      }

      this.updateFeedAndCache([...this.state.feed, ...res.data]);
     
    })
  }

  deleteItem(id){
    console.log(id);
    let arr = this.state.feed;
    axios.delete(`/api/deleteItem/${id}`).then( res => {
      console.log(res.data);
      for(var i = arr.length - 1; i >= 0; i--){
        if(arr[i].id === id){
          arr.splice(i, 1);
        }
      }
      this.updateFeedAndCache(arr);
    })
  }

// outsourcing this setState functionality happening multiple times to ONE function 
  updateFeedAndCache(newFeed){
    this.setState({
      feed: newFeed
    }, () => {
      localStorage.feed = JSON.stringify(this.state.feed);
    })
  }



  render() {
    let arr = this.state.feed;
    console.log(arr);
    return (
      <div className="feed">
        {arr.map( (item, id) => {
          return <div key={ id } id='main-container'>
          <div id="delete"><img src={trash} onClick={() => this.deleteItem(item.id)} /></div>
          <p id='title'>{item.title}</p>
          <p id='content'>{item.item}</p>
        </div>
        })}
        
      </div>
    );
  }
}


export default Feed;