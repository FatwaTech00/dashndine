import { useState } from "react";
import Navbar from "./components/Navbar"
import "./App.css";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
