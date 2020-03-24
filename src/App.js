import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layout';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

class App extends Component {
  x;
  server;
  state={
    allNoteContents:""
  }
  content;
  textChange=(v)=>{
    this.x=v;
    console.log(v);
  }
  addToDB=()=>{
    console.log("io="+this.x);
    ipcRenderer.send('item:add', this.x);
  }
  getAllNoteContent=()=>{    
    ipcRenderer.send('note:getAllNotes');
    console.log('app js note:getAllNotes');
  }
  componentDidMount() {
    this.getAllNoteContent()
    console.log("componentDidMount")
    ipcRenderer.on('note:getAllNotes:done', function(e, data){      
      console.log("app js - note:getAllNotes:done")
      console.log(data)
      this.setState({allNoteContents:data})
    }.bind(this));
  }
  render() {
    return (
      <Layout change={this.textChange} click={this.addToDB} allNoteContents={this.state.allNoteContents}/>
    );
  }
}


 export default App;