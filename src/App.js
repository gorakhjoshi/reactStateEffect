import React, { useState, useEffect } from 'react';

console.log('I am starting your application!');

function App() {
  console.log('I have just entered into App component!');
  const [state, setState] = useState('');

  useEffect(() => {
    localStorage.setItem('myCat', 'Hello I am from localstorage');
  });

  console.log(state);

  function handleChange(e) {
    console.log('I have just entered into handleChange function');
    setState(e.target.value);
    console.log(state);
  }

  function handleClick() {
    setState('hello');
  }

  console.log(state);
  console.log('I am entering into JSX!');

  return (
    <div>
      <h1>Searching...</h1>
      <label htmlFor='search'>Search: </label>
      <input type='text' id='search' onChange={handleChange} />

      <button onClick={handleClick}>Click Me</button>

      <h2>Searching for: {state.a}</h2>
    </div>
  );
}

export default App;
