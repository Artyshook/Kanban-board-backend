import { Board } from './pages/Board'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashBoard } from './pages/DashBoard'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { Login } from './pages/Login'
import { Registration } from './pages/Registration'
import Container from '@mui/material/Container'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth='lg'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/home' element={<DashBoard />} />
          <Route path='/board/:id' element={<Board />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
