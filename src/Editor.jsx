import React from 'react' ;
import "codemirror/lib/codemirror.css"; 
import "codemirror/theme/material.css";
import {Controlled as ControlledEditor} from 'react-codemirror2' ;
import 'codemirror/mode/xml/xml' ;
import 'codemirror/mode/css/css' ;
import 'codemirror/mode/javascript/javascript' ;


const Editor = (prop) =>{

    const openCollapse = () =>{
        console.log(`clicked ${prop.type}`);
    }


    

    return(
        <>
            
            <div className = "input-div">
                <header>
                    <button onClick={openCollapse} id="language">{`${prop.type} O/P`}</button>
                </header>
                <ControlledEditor  value = {prop.val} options = {{ theme: 'material' , mode : prop.type} } onBeforeChange={prop.onChange} />
            </div>
            
        </>
    );
}

export default Editor ;