import React, { useState } from 'react';

export default function UseColor(){
    const [color, setColor] = useState('Yellow');

    return(
        <div>
            <input 
            type="submit"
             value={color} 
             onClick={() => setColor("Indigo") }
             className='text-warning'
             style={{
                backgroundColor: color,
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
             }}
             />
        </div>
    )
}