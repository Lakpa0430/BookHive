import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './component/NavBar';
import { Home } from './pages/Home';
import  About  from './pages/About';
import { Contact } from './pages/Contact';
import { Jobs } from './pages/jobs';
import  SignUp  from './pages/signup.jsx';
import {Login}  from './pages/Login.jsx';
import Buy from './component/Buy.jsx';
import AddCart from './component/AddCart.jsx';

function App() {
  return (
    <Router>
      <div>
        <div className='mb-20'>
        <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/addCart' element={<AddCart />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
