import React, { Component } from 'react';
import './App.css';
import Layout from './component/Layout';

//electron relate
const electron = window.require('electron');
const {ipcRenderer} = electron;

class App extends Component {
  x;
  server;
  textChange=(v)=>{
    this.x=v;
    console.log(v);
  }
  addToDB=()=>{
    console.log("io="+this.x);
    ipcRenderer.send('item:add', this.x);
    
  }
  render() {
    return (
      <Layout change={this.textChange} click={this.addToDB}/>
    );
  }
}

export default App;
