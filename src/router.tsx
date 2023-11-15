import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Logement from './pages/Logements/Logement'
import About from './pages/About/About'
import ErrorPage from './pages/Error/Error'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/logements" element={<Logement />} /> */}
      <Route path="/logements/:id" element={<Logement />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default AppRouter
