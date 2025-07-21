import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <button id="counter" type="button" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

export { Counter };
