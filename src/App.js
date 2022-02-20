
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavLink from './components/NavLink';
import Portfolio from './components/Portfolio';



function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <NavLink />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about"  element={<About />} />
          <Route path="/portfolio"  element={<Portfolio />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>

    // </>
  );
}

export default App;
