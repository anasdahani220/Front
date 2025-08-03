import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import './css/Navbar.css'
import Home from './home/home'

import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
import Favorites from './favorites/favorites'
import { Movieprovider } from './contexts/context'
function App() {
  

  return (
  <Movieprovider>
    <Router>
      <nav className="navbar">
        <h1 className='navbar-brand'>Movie App</h1>
        <div className="navbar-links">
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/favorites'>Favorites</Link>
        </div>
      </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />}/>
        </Routes>
    </Router>
  </Movieprovider>
    
  
   
  )
}

export default App
