
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Texteditor from './components/Texteditor';

function App() {

  const [mode, setMode] = useState('light');
  const toogleMode=()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor='#343A40';
      document.body.style.color='white';

      const c = document.getElementById('exampleFormControlTextarea1');
      c.style.backgroundColor="black";
      c.style.color="white";
    }else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      
      const c = document.getElementById('exampleFormControlTextarea1');
      c.style.backgroundColor="white";
      c.style.color="black";

    }
  }
  return (

  <>
  <Navbar title="Sabbir Ahmed" home="HOME" mode={mode} toogleMode={toogleMode}  blog="Blog" About="About"/>
  <Texteditor title="Write here..."/>
  </>

  );
}

export default App;
