import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Cart from './components/Cart'
import Coffee from './components/Coffee'
import LoginForm from './authentication/LoginForm'
import './App.css'
import SignUpForm from './authentication/SignUpForm'
import LogOut from './authentication/LogOut'
import Product from './components/Product'

import { QueryClient, useQuery, QueryClientProvider } from '@tanstack/react-query';
import toast, {Toaster} from "react-hot-toast";
import ProtectedRoute from './components/ProtectedRoute'

import PrivateRoutes from './components/ProtectedRoute2'

const queryClient = new QueryClient()

export default function App() {

  return (
    <>
      <Toaster position='top-center' />
      <QueryClientProvider client={queryClient}>
        <Router>
        {/*<Routes element={<ProtectedRoute />} > đây là protected route cũ*/} 
        <Routes>

          <Route element={<PrivateRoutes />}>
            <Route path="/Cart" element={<Cart />} />
          </Route>

       {/*<Route element={<PrivateRoutes3 />}>
            <Route path="/Product" element={<Product />} />
          </Route>*/}

          <Route path="/" element={<Home />} />
          {/*<Route path="/Cart" element={<Cart />} /> đây là protected route cũ*/}
          <Route path="/Coffee" element={<Coffee />} />
          <Route path="/authentication/LoginForm" element={<LoginForm />} />
          <Route path="/authentication/SignUpForm" element={<SignUpForm />} />
          <Route path="/authentication/LogOut" element={<LogOut />} />
        </Routes>
      </Router>
      </QueryClientProvider>
    </>
  )
}



//phut 5:00 youutbe la bat dau router v6

