import React from 'react'
import Greetings from './greetings'
import  './assets/form.css'
import Question5 from './Question5'
import Comp from './Question1'
import Form from './assets/form'
const App = () => {
  return (
    <div>
      <Form/>
      <Comp student_name="Peter" email="Peter@gmail.com" age="20" address="India" course="MERN"/>
      <Question5/>

    </div>
  )
}

export default App;
