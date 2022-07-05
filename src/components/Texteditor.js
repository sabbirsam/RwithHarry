import React, {useState} from 'react';

export default function Texteditor( props) {
    const handleClick =()=>{
        let txts = text.toUpperCase();
        updateText( txts );
    }
    const handleChange =(event)=>{
        updateText(event.target.value);
    }
    const [text, updateText] = useState("what are you doing");
  return (
   <div className="container">
     <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleChange}></textarea>
        <button className="btn btn-primary my-3" onClick={handleClick}> Uppercase</button>
    </div>
   </div>
  )
}
