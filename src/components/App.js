import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './../styles/App.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
    </div>
  );
};


const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is a sample React Router program.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
