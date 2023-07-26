
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [count , setCount]  = useState("tab 1");
  function change(event){
    setCount(event.target.textContent);
  }
  return (
    <div>
        {/* Do not remove the main div */}
          <li onClick={change}>Tab 1</li>
          <li onClick={change}>Tab 2</li>
          <li onClick={change}>Tab 3</li>
          <p>This is the content for {count}.</p>
    </div>

  )
}

export default App