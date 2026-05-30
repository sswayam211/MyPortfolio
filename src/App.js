import './App.css';
import "./MyComponents/Styling/Style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./MyComponents/Pages/Home";
import About from "./MyComponents/Pages/About";
import Resume from "./MyComponents/Resume/Swayam_Singh_Resume.pdf";
import Header from "./MyComponents/Sections/Header";
import Contact from './MyComponents/Pages/Contact';
import Project from './MyComponents/Pages/Project';

function App() {
  return (
    <>
      <Router>

        <Header />

        <Routes>

          <Route path='/' element={
            <Home />
          }></Route>

          <Route path='about' element={
            <About />
          }></Route>

          <Route path='contact' element={
            <Contact />
          }></Route>

          <Route path='project' element={
            <Project />
          }></Route>

        </Routes>

      </Router>




    </>
  );
}

export default App;
