import React, { useState } from 'react';

const Counter = ({initial,stock}) => {
  const [count, setCount] = useState(initial);

  const addUp = () => {
      if(count < stock){
          setCount(count + 1);
      }
  }

  const downUp = () => {
    if(count > initial){
        setCount(count - 1);
    }
}

  return (
    <div className="clicker">
        
      <button onClick={downUp}>-</button>
      <span>{count}</span>
      <button onClick={addUp}>+</button>
    </div>
  );
};

export default Counter;
