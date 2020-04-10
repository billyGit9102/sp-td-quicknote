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
  componentDidMount=()=>{
    this.getAllNoteContent()
    console.log("componentDidMount")
    ipcRenderer.on('note:getAllNotes:done', function(e, data){
      console.log("app js - note:getAllNotes:done")
      console.log(data)
      this.setState({allNoteContents:data})
    }.bind(this));
  }
  onEditorChange=(id,content)=>{
    console.log("app js - onEditorChange")
    //if(window.timerForNoteChanges!== undefined){ 
     //timerForNoteChanges=0;  
      //console.log(timerForChanges);   
      //clearTimeout(timerForChanges);
      //timerForChanges=
    //}
    const data={};
    data.id=id;
    data.content=content;    
    ipcRenderer.send('note:change',data);
    
  }
  render() {
    return (
      <Layout change={this.textChange} click={this.addToDB} allNoteContents={this.state.allNoteContents} onEditorChange={this.onEditorChange}/>
    );
  }
}


 export default App;