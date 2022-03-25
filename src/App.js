import { useState, useEffect } from 'react';
import List from './List';
import { stories } from './stories';

function App() {
  const [state, setState] = useState(localStorage.getItem('myCat') || 'React');

  useEffect(() => {
    localStorage.setItem('myCat', state);
  });

  function handleChange(e) {
    setState(e.target.value);
  }

  function handleClick() {
    setState('hello');
  }

  return (
    <div>
      <h1>Searching...</h1>
      <label htmlFor='search'>Search: </label>
      <input type='text' id='search' onChange={handleChange} value={state} />
      <button onClick={handleClick}>Click Me</button>
      <h2>Searching for: {state.a}</h2>
      {state}
      <hr />
      <List stories={stories}>hello</List>
    </div>
  );
}

export default App;
