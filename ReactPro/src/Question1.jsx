import React from "react";

function Comp(props) {
  return (
    <div>
        <h1>This is a {props.student_name} Component</h1>
        <h2>This is a {props.email} Component</h2>
        <h3>This is a {props.age} Component</h3>
        <h4>This is a {props.address} Component</h4>
        <h5>This is a {props.course} Component</h5>
    </div>
  )
}
export default Comp;