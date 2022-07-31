import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import About from './components/aboutme'
import Skill from './components/skill'
import Sidebar from './components/Sidebar';
import Work from './components/work';
import Contact from './components/contactme';
import { Routes,Route,Switch, Navigate} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className='flex flex-row text-base'>
        <div className='basis-1/12 bg-black' >
            <Sidebar/>
        </div>
        <div className='basis-11/12 bg-white' >
        <Routes>
          <Route path="/about" element={<About />}>  </Route>
          <Route path="/skill" element={<Skill />}>   </Route>
          <Route path="/work" element={<Work />}>   </Route>
          <Route path="/contact" element={<Contact />}>   </Route>
          <Route path="/" element={<Home />}>  
          </Route>
        </Routes>
        </div>
  </div>
  );
}

export default App;
