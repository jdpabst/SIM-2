
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import AddItem from './components/AddItem/AddItem.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ AddItem } path='/add' />

    </Switch>
)
