import { AddPostPage } from '../pages/AddPostPage'
import { ArticlePage } from './ArticlePage'
import { BlogHome } from '../pages/BlogHome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Header'
import { Login } from '../pages/Login'
import { Registration } from '../pages/Registration'
import React from 'react'

export const BaseLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<BlogHome />} />
        <Route path='/posts/:id' element={<ArticlePage />} />
        <Route path='/new' element={<AddPostPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}
