import React, { Component } from 'react';
import home from '../../images/web-page-home.png';
import trash from '../../images/trash.png';

import './AddItem.css';


class AddItem extends Component {
    
  
  render() {
    return (
        <div id='main-container'>
            <div id="header">
                <img src={home} alt='home'/>
                <img src={trash} alt='delete'/>
            </div>

            <div id="title">
            </div>

            <div id="main-content">
            </div>
        </div>
    )
}}


export default AddItem;