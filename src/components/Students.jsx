import { useState } from "react";
function App(){
  const [text,setText] = useState(0);

  console.log(text);
 
  
  return(
    <>
    <div className="card">
    <button onClick={() => setText(text - 1)}  >~</button>
       <h2>{text}</h2>
    <button onClick={() => setText(text + 1)}  >+</button>
    

    </div>
    
   
    </>
  )
}
export default App;