import { BlogHome } from './BlogHome'
import { BlogType } from './BlogItem'
import { genericHookContextBuilder } from '../helpers/genericHookContextBuilder'
import { services } from '../helpers/service'
import { useAsyncComponentDidMount } from '../helpers/UseComponentDidMount'
import { useLocalStorage } from '../helpers/functions'
import React, { useState } from 'react'
import axios from '../axios'

export type BlogData = {
  _id: string
  title: string
  text: string
  createdAt: Date
  user: any
  imageUrl: string
}

const useLogicState = () => {
  const [showForm, setShownForm] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  const [data, setData] = useLocalStorage('blog', [] as BlogData[])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null as string | null)
  const [alertMessage, setAlertMessage] = useState(false)
  const [searchKey, setSearchKey] = useState('')

  useAsyncComponentDidMount(async () => {
    setLoading(true)
    try {
      setData(await services.blog.list())
      setError(null)
      setLoading(false)
    } catch (error) {
      setError(`Database is unavailable`)
    } finally {
      setLoading(false)
    }
  })

  return {
    showForm,
    setShownForm,
    title,
    setTitle,
    text,
    setText,
    category,
    setCategory,
    alertMessage,
    setAlertMessage,
    searchKey,
    setSearchKey,
    data,
  }
}

export const { ContextProvider: BlogContextProvider, Context: BlogContext } =
  genericHookContextBuilder(useLogicState)

export const BlogUseContext = () => {
  return (
    <BlogContextProvider>
      <BlogHome />
    </BlogContextProvider>
  )
}
