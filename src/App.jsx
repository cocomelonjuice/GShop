import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Cart from './components/Cart'
import Coffee from './components/Coffee'
import LoginForm from './authentication/LoginForm'
import './App.css'

import { QueryClient, useQuery, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function App() {

  return (
    <>
        <QueryClientProvider client={queryClient}>
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Coffee" element={<Coffee />} />
          <Route path="/authentication/LoginForm" element={<LoginForm />} />
        </Routes>
      </Router>
        </QueryClientProvider>


      
    </>
  )
}


