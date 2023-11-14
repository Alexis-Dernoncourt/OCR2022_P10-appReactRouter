import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Logements from './pages/Logements/Logements'
import About from './pages/About/About'
import ErrorPage from './pages/Error/Error'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/logements" element={<Logements />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default AppRouter
