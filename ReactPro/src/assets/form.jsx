import React from "react";

function Form (){
    return (
        <form action="post" >
            <legend>Registration form</legend>
            <label for= "name"> Firstname:</label>
            <input
            type="text"
            placeholder="Enter your Firstname"
            />
            <label htmlFor="name">Lastname:</label>
            <input 
            type="text" 
            placeholder="Enter your Lastname"
            />
            <label htmlFor="email">Email:</label>
            <input
             type="text"
             placeholder="Enter u'r Email"
            />
            <label htmlFor="address">Address:</label>
            <input 
            type="text"
            placeholder="Enter u'r Address"/>
            <div>
            <button  style={{color:'white', backgroundColor:'red'}}>Cancel</button>
            <button style={{color:'white', backgroundColor:'green'}}>Register</button>
            </div>
        </form>
    )
}


export default Form;