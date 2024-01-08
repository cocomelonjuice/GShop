import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Store from './components/Store'
import './App.css'
import Navbar from './components/Navbar'

export default function App() {

  return (
    <>
    <div>new</div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Store />} />
          <Route path="/Navbar" element={<Navbar />} />
        </Routes>
      </Router>
    </>
  )
}


