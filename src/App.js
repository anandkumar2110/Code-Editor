import React from 'react' ;
import Editor from './Editor' ;
import { useState,useEffect } from 'react';
import './index.css' ;

const App = () =>{
  
  const [html,changeHtml] = useState('') ;
  const [css,changeCss] = useState('') ;
  const [js,changeJs] = useState('') ;
  const srcDoc = `<html>${html}</html>
  <style>${css}</style>
  <script>${js}</script>` ;

  const getHtml = (editor,data,value) =>{
    changeHtml(value) ;
  }

  const getCss = (editor,data,value) =>{
    changeCss(value) ;
  }

  const getJs = (editor,data,value) =>{
    changeJs(value) ;
  }


  return(
    <>

      
      <div className='pane input-pane'>
        <Editor onChange = {getHtml} val = {html} type="xml" />
        <Editor onChange = {getCss} val = {css} type="css" />
        <Editor onChange = {getJs} val = {js} type="javascript" />
      </div>
      <div className='pane output-pane'>
        <iframe srcDoc = {srcDoc} title="Mistake Counter" width="100%" height="100%"/>
      </div>
    </>
  );
}

export default App ;