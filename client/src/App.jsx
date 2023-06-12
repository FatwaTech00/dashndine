import { useState } from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Navbar/><Home/><Menu/><Contact/></>}/>
    </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
