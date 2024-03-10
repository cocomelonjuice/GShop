import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Cart from './components/Cart'
import Coffee from './components/Coffee'
import LoginForm from './authentication/LoginForm'
import './App.css'
import SignUpForm from './authentication/SignUpForm'

import { QueryClient, useQuery, QueryClientProvider } from '@tanstack/react-query';
import toast, {Toaster} from "react-hot-toast";
import ProtectedRoute from './components/ProtectedRoute'

const queryClient = new QueryClient()

export default function App() {

  return (
    <>
      <Toaster position='top-center' />
      <QueryClientProvider client={queryClient}>
        <Router>
        <Routes element={<ProtectedRoute />} >
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Coffee" element={<Coffee />} />
          <Route path="/authentication/LoginForm" element={<LoginForm />} />

          <Route path="/authentication/SignUpForm" element={<SignUpForm />} />
        </Routes>
      </Router>
      </QueryClientProvider>
    </>
  )
}


