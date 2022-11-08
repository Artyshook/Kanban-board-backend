import { AddPostPage } from '../pages/AddPostPage'
import { ArticlePage } from './ArticlePage'
import { BlogHome } from '../pages/BlogHome'
import { BlogUseContext } from '../pages/BlogContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Header'
import { Login } from '../pages/Login'
import { Registration } from '../pages/Registration'
import Container from '@mui/material/Container'
import React from 'react'

export const BaseLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth='lg'>
        <Routes>
          <Route path='/' element={<BlogUseContext />} />
          <Route path='/posts/:id' element={<ArticlePage />} />
          <Route path='/new' element={<AddPostPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
