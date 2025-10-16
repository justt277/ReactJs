import React, {useState} from "react";

export default function Fsubmit() {
    const [text, setText] = useState("");
    function Handlesubmit(e){
        e.preventDefault();
        alert("Form Submitted"  + text);
    }
    return(
        <div>
            <h1>Form Submit</h1>
      <form onSubmit={Handlesubmit}>
        <input 
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" className="form-control bg-primary bg-outline-danger"/>
        </form>
        </div>
    )
}