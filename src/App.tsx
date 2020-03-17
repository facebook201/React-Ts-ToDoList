import React, { useState } from 'react';

const App = () => {
  // const [count, setCount] = useState(0);

  console.log(useState(0));

  return (
    <div>
      <button onClick={ () => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
