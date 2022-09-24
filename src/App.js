import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Event from './Pages/Event/Event';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="event" element={<Event />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
