import { useState } from "react";
import { CounterDisplay } from "./components/CounterDisplay"; 
import { CounterButton } from "./components/CounterButton";   
import { CounterMessage } from "./components/CounterMessage";
import Mapping from "./components/Mapping"; 
import Count from "./components/Count";

import "./App.css";

const App = () => {

  
  // count → stores the current number
  // setCount → function used to update count
  const [count, setCount] = useState(0);
  const [value , setValue]  = useState("");

  // history → array that stores all operations performed
  // setHistory → updates history
  const [history, setHistory] = useState([]);

  // Function to increase count by 1
  const handleIncrement = () => {

    // Update count (adds 1 to current value)
    setCount(count + 1);

    // Add a new entry to history
    // "..." spreads old history values and adds new one at the end
    setHistory([...history, `+ 1 → ${count + 1}`]);

  };

  // Function to decrease count by 1
  const handleDecrement = () => {

    // Decrease count
    setCount(count - 1);

    // Save action in history
    setHistory([...history, `- 1 → ${count - 1}`]);
  };


  const handelonRest = () => {

    setCount(0);


   setHistory([...history, `Reset → 0`]);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>

      <CounterDisplay count={count} />

      <CounterButton
        onIncrement={handleIncrement} // called when Increment button clicked
        onDecrement={handleDecrement} // called when Decrement button clicked
        onReset={handelonRest}
      />

      <CounterMessage count={count} />

      {/* History section */}
      <h3>History:</h3>

      {/* Loop through history array and display each item */}
      <ul>
        {history.map((item) => (
          // key is required in lists (React uses it for performance)
          <li>{item}</li>
        ))}
      </ul>

      <input type="text" onChange={handleInputChange} value={value} />
      <p>You typed: {value}</p>
    
    </div>
  );
};

export default App;