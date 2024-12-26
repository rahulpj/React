import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  const arr = [1, 2, 3];
  const obj = {
    name: "asdf",
    age: 21,
  };
  return (
    <>
      <h1 className="bg-green-500 mb-5">Tailwind</h1>
      <Cards name="Rahul Panjwani" anyArr={arr} anyObj={obj} />
    </>
  );
}

export default App;
