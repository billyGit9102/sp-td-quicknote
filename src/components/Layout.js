import React from 'react';
import Aux from '../hoc/Auxiliary';

import TinyEditorComponent from './TinyEditorComponent';
//<input type="text" onChange={(e)=>props.change(e.currentTarget.value)}/>
//        <button onClick={props.click}>add</button>

const layout = (props) => {
    let notes = null
    if(props.allNoteContents==""){
        notes="loading";
    }else{
        notes=(
            <TinyEditorComponent
            id="myCoolEditor" onEditorChange={content => console.log(content) }
            width="100%" height="100%" content={props.content}
            />
        )
    }
   return (
    <Aux>
        {notes}
    </Aux>
   )
};


export default layout;