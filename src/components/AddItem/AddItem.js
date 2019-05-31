import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import home from '../../images/web-page-home.png';
import trash from '../../images/trash.png';
import axios from 'axios';

import './AddItem.css';


class AddItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            item: ''
        }

            this.handleTitle = this.handleTitle.bind(this);
            this.handleItem = this.handleItem.bind(this);
            this.addToDb = this.addToDb.bind(this);
    }

    handleTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    handleItem(e){
        this.setState({
            item: e.target.value
        })
    }
    componentWillUnmount(){
        if(this.state.title !== '' || this.state.item !== ''){
            this.addToDb();
        } 
    }

    addToDb(){
        let {title, item} = this.state
        console.log(`title: ${this.state.title} and item: ${this.state.item}`)
        axios.post('/api/addItem', {title, item})
            .then((res) => {
                console.log(res.data);
            })
    }
  
  render() {
    return (
        <div className='main-container'>
            <div id="header">
                <Link to='/'> <img src={home} alt='home' /> </Link> 
                <img src={trash} alt='delete'/>
            </div>
            <div id="input-container">
                <div id="title">
                    <input placeholder="TITLE" onChange={this.handleTitle}/>
                </div>

                <div id="main-content">
                    <textarea placeholder="to do items go here..." onChange={(e) => this.setState({item: e.target.value})}/>
                </div>
            </div>
        </div>
    )
}}


export default AddItem;