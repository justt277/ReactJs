import React from "react";

function Football(){
    const shoot = () =>{
        alert("GOOOOOOOAL😃😃😃😃 !!!");
    }
    return(
        <div className="container mt-5" >
            <h1 className="text-center text-primary">shoot the ball</h1>
            <button onClick={shoot} className="btn btn-outline-primary ">shoot</button>
        </div>
    )
}
export default Football;