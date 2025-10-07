import React from 'react'
import Greetings from './greetings'
import  './assets/form.css'
import Comp from './Question1'
import Form from './assets/form'
const App = () => {
  return (
    <div>
      <Form/>
      <Comp student_name="Peter" email="Peter@gmail.com" age="20" address="India" course="MERN"/>
      <Comp student_name="Peter" email="Peter@gmail.com" age="20" address="India" course="MERN"/>
      <Comp student_name="Peter" email="Peter@gmail.com" age="20" address="India" course="MERN"/>
      <Comp student_name="Peter" email="Peter@gmail.com" age="20" address="India" course="MERN"/>
      <Comp student_name="Peter" email="Peter@gmail.com" age="20" address="India" course="MERN"/>
      <Comp student_name="Peter" email="Peter@gmail.com" age="20" address="India" course="MERN"/>
      
    </div>
  )
}

export default App;
