import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(15);

  const incf = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const decf = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div>
        <h1>Chai aur React </h1>
        <h2>Counter :- {count}</h2>
        <button onClick={incf}>increase</button>
        <button onClick={decf}>decrease</button>
      </div>
    </>
  );
}

export default App;
