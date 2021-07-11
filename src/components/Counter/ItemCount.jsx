import React, { useState } from 'react';

const Counter = ({initial,stock}) => {
  const [count, setCount] = useState(initial);

  const addUp = () => {
      if(count < stock){
          setCount(count + 1);
      }
  }

  const addDown = () => {
    if(count > initial){
        setCount(count - 1);
    }
}

  return (
    <div className="clicker">
        
      <button onClick={addDown}>-</button>
      <span>{count}</span>
      <button onClick={addUp}>+</button>
    </div>
  );
};

export default Counter;
