import { useState } from 'react'
import './App.css'
import Navbar from './Pages/Components/Nav.jsx'
import AboutMe from './Pages/AboutMe.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width:'60em'}} className='center'>
      <AboutMe />
    </div>
  )
}

export default App
