import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Cart from './components/Cart'
import Coffee from './components/Coffee'
import './App.css'

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Coffee" element={<Coffee />} />
        </Routes>
      </Router>
    </>
  )
}


