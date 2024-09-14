import './App.css';
import Header from './MyComponents/Header';
import  Home from './MyComponents/Pages/Home';
import About from './MyComponents/Pages/About';
import Project from './MyComponents/Pages/Project';
import Contact from './MyComponents/Pages/Contact';
import './MyComponents/CSS/Style.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        {/* <Bg /> */}
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <br/>
              <About />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
