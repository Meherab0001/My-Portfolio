import './App.css';
import Navbar from './components/Navbar';
import { Route,  Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div >

      <Navbar></Navbar>
          <Routes>
            <Route path='' element={<Home></Home>}></Route>
            <Route path='/blog' element={<Blogs></Blogs>}/>
            <Route path='/project' element={<Projects></Projects>}/>
            <Route path='/about' element={<About></About>}/>

          </Routes>
    </div>
  );
}

export default App;
