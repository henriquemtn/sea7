import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import RouterManager from './routes/router.tsx'
import NavBar from './components/Navbar/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <ToastContainer />
    <RouterManager />
  </React.StrictMode>,
)
