import React, { Component } from 'react';

import './NewItem.css';


class NewItem extends Component {

  render() {
    return (
      <div className="feed">
        {/*  MAP THROUGH THE ITEMS IN THE DB HERE */}
        <div id='main-container'>
            <p id='title'>TITLE</p>
            <p id='content'>content</p>
        </div>
      </div>
    );
  }
}


export default NewItem;