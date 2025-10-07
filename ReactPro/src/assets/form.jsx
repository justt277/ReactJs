import React from "react";

function Form (){
    return (
        <form action="post" style={{alignContent:'center', padding:'20px', border:'2px solid white', borderRadius:'10px'}}>
            <legend>Registration form</legend>
            <label for= "name"> Firstname:</label>
            <input
            type="text"
            placeholder="Enter your Firstname"
            style={{border:'2px solid white'}}
            />
            <label htmlFor="name">Lastname:</label>
            <input 
            type="text" 
            placeholder="Enter your Lastname"
             style={{border:'2px solid white'}}
            />
            <label htmlFor="email">Email:</label>
            <input
             type="text"
             placeholder="Enter u'r Email"
              style={{border:'2px solid white'}}
            />
            <label htmlFor="address">Address:</label>
            <input 
            type="text"
            placeholder="Enter u'r Address"
             style={{border:'2px solid white'}}
             />
            <div>
            <button  style={{color:'white', backgroundColor:'red'}}>Cancel</button>
            <button style={{color:'white', backgroundColor:'green'}}>Register</button>
            </div>
        </form>
    )
}


export default Form;