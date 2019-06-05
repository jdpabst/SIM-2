import React, { Component } from 'react';
import axios from 'axios';
import trash from '../../images/trash.png';
import update from '../../images/pencil.png';

import './Feed.css';


class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {
      feed: [],
      title: 'testing state title',
      item: 'testing state item content',
      visibility: 'hidden'
    }

    this.getFeed = this.getFeed.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateFeedAndCache = this.updateFeedAndCache.bind(this);
    this.updateItemTitle = this.updateItemTitle.bind(this);
    this.updateItemContent = this.updateItemContent.bind(this);
    this.updateItemOnTable = this.updateItemOnTable.bind(this);
  }

  componentDidMount(){ 
    // do i need to do something here to avoid duplicates? //
    
    this.setState({
      // second part of cacheing the feed to help initial load time //
      feed: localStorage.feed ? JSON.parse(localStorage.feed) : []
    })
    this.getFeed();
  }

  getFeed(){
    let arr = this.state.feed;
    axios.post('/api/items').then( res => {
      for(var i = 0; i < res.data.length; i++){
        for(var j = 0; j < arr.length; j++){
          if(res.data[i].id === arr[j].id){
            arr.splice(j,1);
            j--;
          }
        }
      }
      this.updateFeedAndCache([...this.state.feed, ...res.data]);
    })
  }

  deleteItem(id){
    let arr = this.state.feed;
    axios.delete(`/api/deleteItem/${id}`).then( res => {
      for(var i = arr.length - 1; i >= 0; i--){
        if(arr[i].id === id){
          arr.splice(i, 1);
        }
      }
      this.updateFeedAndCache(arr);
    })
  }

  updateItemPopupInfo(id){
    let arr = this.state.feed;
      for(var i = 0; i < arr.length; i++){
        if(arr[i].id === id){
          this.setState({
            title: arr[i].title,
            item: arr[i].item,
            visibility: 'visible',
            id: arr[i].id
          })
        }
      }
  }

  updateItemTitle(e){
    this.setState({
      title: e.target.value
    })
  }

  updateItemContent(e){
    this.setState({
      item: e.target.value
    })
  }

  updateItemOnTable(){
    let {title, item} = this.state;
    // update the item on the table by clicking on the button //
    axios.post(`/api/updateItem/${this.state.id}`, {title, item}).then( res => {
      console.log('item update on db');
      this.setState({
        visibility: 'hidden'
      })
    })
    console.log(this.state)
    this.getFeed();
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
    let style = {
      visibility: this.state.visibility
    }
    return (
      <div className="feed">

        <div id='update-form' style={style}>
          <input id='title' alt='title' type='text' value={this.state.title} onChange={this.updateItemTitle}/>
          <textarea id='item' alt='to do item' value={this.state.item} onChange={this.updateItemContent}/>
          <button id='update-item-save-button' alt='save' onClick={this.updateItemOnTable} >SAVE</button> 
       </div>

        {arr.map( (item, id) => {
          return <div key={ id } id='main-container'>

          <div className='modifying-icons'>
            <div className='icon' id='update'>
              <img src={update} onClick={() => this.updateItemPopupInfo(item.id)} alt='update' />
            </div>
            <div className='icon' id="delete">
              <img src={trash} onClick={() => this.deleteItem(item.id)} alt='delete' />
            </div>
          </div>

          <p id='title'>{item.title}</p>
          <p id='content'>{item.item}</p>
        </div>
        })}
        
      </div>
    );
  }
}


export default Feed;