import { BlogHome } from './BlogHome'
import { BlogType } from './BlogItem'
import { changeOrder, useLocalStorage } from '../helpers/functions'
import { genericHookContextBuilder } from '../helpers/genericHookContextBuilder'
import { services, services1 } from '../helpers/service'
import { useAsyncComponentDidMount } from '../helpers/UseComponentDidMount'
import { useNavigate } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import axios from '../axios'

export type BlogData = {
  _id: string
  title: string
  text: string
  category: string
  createdAt: Date
  user: any
  imageUrl: string
}

const useLogicState = () => {
  // const [showForm, setShownForm] = useState(false)
  // const [title, setTitle] = useState('')
  // const [text, setText] = useState('')
  // const [imageUrl, setImageUrl] = useState('')
  // const inputFileRef = useRef<any>(null)
  // const navigate = useNavigate()

  const [category, setCategory] = useState('')
  const [data, setData] = useLocalStorage('blog', [] as BlogData[])
  const [completed, setCompleted] = useLocalStorage('completed', [] as BlogData[])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null as string | null)
  const [alertMessage, setAlertMessage] = useState(false)
  const [searchKey, setSearchKey] = useState('')
  console.log(data)

  useAsyncComponentDidMount(async () => {
    setLoading(true)
    try {
      setData(await services.blog.list())
      setCompleted(await services1.completedTask.list())
      setError(null)
      setLoading(false)
    } catch (error) {
      setError(`Database is unavailable`)
    } finally {
      setLoading(false)
    }
  })

  const changeOrder = () => {}

  return {
    category,
    setCategory,
    alertMessage,
    setAlertMessage,
    searchKey,
    setSearchKey,
    data,
    setData,
    completed,
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
