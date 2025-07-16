import { useState } from "react";

const Stateexample = () => {
    const intialState = "-----"
  const [name, setName] = useState(intialState);
  return (
    <>
      <input type="text" placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)} 
      />
            <p>Hello {name}</p>
        <button onClick={() => setName(intialState)}>Reset Name</button>
        
    </>
  );
};

export default Stateexample;
