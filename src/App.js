import { useState } from "react";
import "./App.css";
import NavbarCom from "./components/Navbar";
import ShoppingCard from "./components/ShoppingCard";
import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home";


function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="App">
        <NavbarCom handleShow={handleShow} />
        <ShoppingCard handleClose={handleClose} show={show} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
