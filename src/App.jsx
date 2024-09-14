import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Routes/Home";
import Detail from "../src/Routes/Detail";
import Favs from "../src/Routes/Favs";
import Contact from "../src/Routes/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/Favs" element={<Favs />} />
          <Route path="/contacto" element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;