import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const [page, setPage] = useState('home');

  const redirectPage = (pageToRender) => {
    setPage(pageToRender)
  }

  return (
    <div className='container'>
      <Navbar redirectPage={redirectPage} />
      { page === 'home' ?
          <Home />
        : page === 'about' ?
          <AboutUs />
        :
          <ContactUs />
      }
    </div>
  );
}

export default App;

/*
  App.js -     redirectPage - does setPage()
    <Navbar>   hello2 = redirectPage
  Navbar       hello2                  
*/
