import React, { Component } from 'react';
import home from '../../images/web-page-home.png';
import trash from '../../images/trash.png';

import './AddItem.css';


class AddItem extends Component {
  
  render() {
    return (
        <div className='main-container'>
            <div id="header">
                <img src={home} alt='home'/>
                <img src={trash} alt='delete'/>
            </div>
            <div id="input-container">
                <div id="title">
                    <input placeholder="TITLE"/>
                </div>

                <div id="main-content">
                    <input placeholder="to do items go here..."/>
                </div>
            </div>
            
        </div>
    )
}}


export default AddItem;