import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Store from './components/Store'
import './App.css'

export default function App() {

  return (
    <>
    <div>new</div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
        </Routes>
      </Router>
    </>
  )
}


