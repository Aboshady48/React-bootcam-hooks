import React, { useState } from "react";

function Greeting() {
  // Declare a state variable 'name' with an initial value of an empty string
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Enter Your Name:</h2> 
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {<h3>Hi {name}</h3>}
    </div>
  );
}

export default Greeting;