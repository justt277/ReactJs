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
      className="form-control w-50 m-auto mb-3"
      />
      <p>Text: {text}</p>
        </div>
    )
}