import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState<number>(1);

  return (
    <div>
      <h1>Merhaba</h1>
      <p>{state}</p>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Arttır
      </button>
    </div>
  );
};

export default App;
