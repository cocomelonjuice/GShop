import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Store from './components/Store'
import './App.css'

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Store />} />
        </Routes>
      </Router>
    </>
  )
}


