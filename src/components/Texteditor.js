import React, {useState} from 'react';

export default function Texteditor( props) {
    const handleClick =()=>{
        let txts = text.toUpperCase();
        updateText( txts );
    }

    const handleClick_case =()=>{
      let txts = text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
      updateText( txts );
  }


    const handleChange =(event)=>{
        updateText(event.target.value);
    }
    const [text, updateText] = useState("Write here what you want to capitalize");
  return (
   <div className="container">
     <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleChange}></textarea>
        <button className="btn btn-primary my-3" onClick={handleClick}> Uppercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleClick_case}>Titlecase</button>
    </div>
   </div>
  )
}
