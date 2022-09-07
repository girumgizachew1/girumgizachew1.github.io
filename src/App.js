import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Home from './components/home';
import About from './components/aboutme'
import Skill from './components/skill'
import Sidebar from './components/Sidebar';
import Menu from './components/menu';
import Work from './components/work';
import Contact from './components/contactme';
import { Routes,Route,Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo4 from './assets/logo4.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  const [menu, setmenu] = useState(false);
  const menuHandler = () => {
    setmenu(true);
};
console.log(menu)
const menuHandler2 = () => {
  setmenu(false);
};
  return (
    <div>
    <div className='flex flex-col' >
      <div className='block flex flex-row-reverse xl:hidden '>
       {menu ?
        <button className='h-12'
        onClick={menuHandler2}>
        <CloseIcon/>
      </button>
       : 
       <button className='h-12'
          onClick={menuHandler}>
          <MenuIcon/>
        </button>}
      </div>
    { menu ?
    <div className='w-full h-full bg-gray-900' >
               <div classname="">
        <div className='hidden' >
        </div>
        <div className='h-screen flex flex-col text-white font-sans text-lg '>
            <div className=' upperslidebar flex flex-col basis-3/12' >
                <Link to="/" onClick={menuHandler2}>
                <img className='flex justify-center'  src={logo4} alt="Logo"/>
                <h1 className='text-lg flex justify-center' >Giri</h1>
                </Link>
                <h1 className='flex justify-center text-sm'>Software engineer</h1>
            </div>
            <div className='middleslidebar py-10 flex flex-col basis-6/12'>
                <button className='py-3 border-y border-gray-800 hover:text-red-600 hover:bg-white' onClick={menuHandler2}><Link to="/about">About</Link></button>
                <button className='py-3 border-b border-gray-800 hover:text-red-600 hover:bg-white'onClick={menuHandler2}><Link to="/skill">Skill</Link></button>
                <button className='py-3 border-b border-gray-800 hover:text-red-600 hover:bg-white'onClick={menuHandler2}><Link to="/contact">Contact</Link></button>
                <button className='py-3 border-b border-gray-800 hover:text-red-600 hover:bg-white'onClick={menuHandler2}><Link to="/work">Work</Link></button>
                <button className='py-3 border-b border-gray-800 hover:text-red-600 hover:bg-white'onClick={menuHandler2}><Link to="/work">Resume</Link></button>
                
            </div>
            <div className='lowwerslidebar flex flex-row basis-3/12 px-2 '>
                    <a href="https://github.com/">
                        <button className='px-2 hover:text-red-600 ' ><GitHubIcon/></button>
                    </a>
                    <a href="https://linkedin.com/">
                    
                    <button className='px-2 hover:text-red-600  '><LinkedInIcon/></button>
                    </a>
                    <a href="https://instagram.com/">
                    <button className='px-2 hover:text-red-600 '><InstagramIcon/></button>
                    </a>
            </div>
        </div>
        </div>
    </div>
    :
    <div className='flex flex-row text-base '>
        <div className='hidden xl:block basis-1/12 bg-gray-800 sticky top-0 h-screen border-r border-white' >
            <Sidebar />
        </div>
        <div className=' w-full bg-white overflow-y-auto ' >
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
  }
  </div>
  </div>
)
};

export default App;
