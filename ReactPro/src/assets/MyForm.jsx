import react , {useState} from 'react';

export default function MyForm(){
    const [name,setName] = useState("");

    function setHandle(e){
        setName(e.target.value)
    }
    return(
        
      
        <form action="post">
             < label for="name">Enter your name:</label>
            <input 
            type="text"
           value= {name}
           onChange={setHandle}
            />
            <p>my name is: {name}</p>
        </form>

    )
}