import React, { useState } from 'react';

export default function Counter() {
  const [state, setState] = useState(5);

  function increment() {
    setState(state + 1);
  }

  function decrement() {
    setState(state - 1);
  }
  return (
    <div>
      <h1>{state}</h1>
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>Decrement</button>
    </div>
  );
}
// пример функционального компонента jsx
