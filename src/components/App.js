import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './../styles/App.css';


const Home = () => {
  return (
    <div>
      <h1>Welcome to my Website!</h1>
    </div>
  );
};


const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is sample React Router Program.</p>
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

/*
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './../styles/App.css';

// Home component
const Home = () => {
  return (
    <div>
      <h1>Welcome to my Website!</h1>
     
    </div>
  );
};

// About component
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is sample React Router Program.</p>
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

       npm 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
/*
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './../styles/App.css';

// Home component
const Home = () => {
  return (
    <div>
      <h1>Welcome to My Website!</h1>
     
    </div>
  );
};

// About component
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is sample React Router Program</p>
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

       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
/*
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
       
    </div>
  )
}

export default App
*/