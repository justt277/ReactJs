import React from 'react'

 export default function ProductList(props){
    const productname = [props.name1, props.name2, props.name3];

    return(
       <ul>
        {productname.map((name, index) =>(
            <li key={index}>{name}</li>
        ))}
       </ul>
    )

}