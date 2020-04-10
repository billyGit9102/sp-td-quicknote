import React from 'react';
import Aux from '../hoc/Auxiliary';

import TinyEditorComponent from './TinyEditorComponent';
//<input type="text" onChange={(e)=>props.change(e.currentTarget.value)}/>
//        <button onClick={props.click}>add</button>

const layout = (props) => {
    let notes = null
    console.log("props.allNoteContents");
    console.log(props.allNoteContents);

    if(props.allNoteContents===""){
        notes="loading";
    }else{
        const numberOfNotes=Object.keys(props.allNoteContents).length;
        let noteTitleArray=[];
        let noteContentArray=[];
        
        for(var key in props.allNoteContents) {
            console.log("props.allNoteContents[key].name");
            console.log(props.allNoteContents[key].content);
            noteTitleArray.push({id:key,title:props.allNoteContents[key].name});
            noteContentArray.push({id:key,content:props.allNoteContents[key].content});
        }

        console.log("final array");
        console.log(noteTitleArray)
        console.log(noteContentArray)
        
        notes=noteContentArray.map(note=>{
            return (
                <TinyEditorComponent
                id={"note"+note.id} noteid={note.id} onEditorChange={props.onEditorChange}
                width="100%" height="100%" content={note.content} key={note.id}
                />
            )
        })
               
    }

   return (
    <Aux>
        {notes}
    </Aux>
   )
};


export default layout;