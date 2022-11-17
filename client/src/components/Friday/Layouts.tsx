import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashBoard } from '../../pages/FridayPages/DashBoard'
import { NavBar } from './NavBar'
import { TaskPage } from '../../pages/FridayPages/TaskPage'
import Container from '@mui/material/Container'
import React from 'react'

export const Layouts = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Container maxWidth='lg'>
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/task' element={<TaskPage editMode={false} />} />
          <Route path='/task/:id' element={<TaskPage editMode={true} />} />
          {/*<Route path='/new' element={<AddBlogUseContext />} />*/}
          {/*<Route path='/login' element={<Login />} />*/}
          {/*<Route path='/register' element={<Registration />} />*/}
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
