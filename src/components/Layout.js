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
        console.log("numberOfNotes");
        console.log(numberOfNotes)
        //notes="loaded"
        notes=[...Array(numberOfNotes)].map(key=>{
            return (
                <TinyEditorComponent
                id="myCoolEditor" onEditorChange={content => console.log(content) }
                width="100%" height="100%" content={props.allNoteContents[key]} key={key}
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