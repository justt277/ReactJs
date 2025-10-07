import React, {useState} from "react";

export default function Question6() {
    const [text, setText] = useState("");
    return (
        <div>
            <h1>Text input</h1>
      <input 
      type="text"
      placeholder="Enter Text"
      value={text}
      onChange={(e) =>setText(e.target.value)} 
      />
      <p>Text: {text}</p>
        </div>
    )
}