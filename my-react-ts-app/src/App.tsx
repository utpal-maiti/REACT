import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes'
import { Suspense } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import DashboardRoutes from './Routes/DashboardRoutes'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <main>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Sidebar />
           
            <Footer />
          </Suspense>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
