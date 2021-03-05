import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/about';
import Menu from './pages/menu';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import Dropdown from './components/Dropdown';



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen (!isOpen);
  }

  useEffect(()=>{
    const hideDropdown = () => {
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false);
        console.log('i resized!')
      }
    }
    
    window.addEventListener('resize', hideDropdown);
    
    return ()=>{
      window.removeEventListener('resize', hideDropdown);
    }
    
  })

  return (
    <div className="App">
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
