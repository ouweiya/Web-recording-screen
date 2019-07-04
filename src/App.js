import React, { useState } from 'react';

function App() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={_ => setcount(count + 1)}>Click</button>
    </div>
  );
}

export default App;
