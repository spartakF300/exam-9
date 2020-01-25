import React from 'react';

import './App.css';
import {Route, Switch} from "react-router";
import Contacts from "./Container/Contacts/Contacts";
import Header from "./Component/Header/Header";
import AddContact from "./Container/AddContact/AddContact";
import Edit from "./Container/Edit/Edit";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/" exact component={Contacts}/>
                <Route path="/addContact" component={AddContact}/>
                <Route path="/edit/:id" component={Edit}/>
            </Switch>
        </div>
    );
}

export default App;
