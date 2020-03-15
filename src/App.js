import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layout';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
//import tinymce from './lib/tinymce/tinymce.min';
//import './lib/tinymce/themes/silver/theme.min';

class App extends Component {
  x;
  server;
  state={
    content:"abcsw1"
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
  getContent=()=>{    
    ipcRenderer.send('getContent', this.x);
    console.log(" getContent=()=>{    ")

  }
  componentDidMount() {

    ipcRenderer.on('recieveContent', function(e, data){
      console.log("recieveContent")
      console.log(data)

      // ul.className = 'collection';
      // const li = document.createElement('li');
      // li.className = 'collection-item';
      // const itemText = document.createTextNode(item);
      // li.appendChild(itemText);
      // ul.appendChild(li);
    });

  }
  render() {
    this.getContent()
    return (
      <Layout change={this.textChange} click={this.addToDB} content={this.state.content}/>
    );
  }
}


 export default App;