import React, {useState} from "react";

export default function Question5() {
    const [count, setCount] = useState(4);
    return (
        <div>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
