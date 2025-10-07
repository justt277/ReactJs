import React from 'react'
import Greetings from './greetings'
import  './assets/form.css'
import Question4 from './Question4'
import Question5 from './Question5'
import Question6 from './Question6'
import Comp from './Question1'
import Form from './assets/form'
const App = () => {
  return (
    <div>
      <Form/>
      <Comp student_name="Peter" email="Peter@gmail.com" age="20" address="India" course="MERN"/>
      <Question4 name1="Laptop" name2="Mobile" name3="Tablet"/>
      <Question5/>
      <Question6/>

    </div>
  )
}

export default App;
