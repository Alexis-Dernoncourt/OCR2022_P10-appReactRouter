import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import ErrorPage from './pages/Error/Error'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default AppRouter
