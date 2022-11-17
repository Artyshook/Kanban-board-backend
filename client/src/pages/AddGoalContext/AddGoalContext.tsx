// import { AddPostPage } from '../AddPostPage'
import { AddGoalPage } from './AddGoal'
import { genericHookContextBuilder } from '../../helpers/genericHookContextBuilder'
import { services1 } from '../../helpers/service'
import { useNavigate } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import axios from '../../axios'

const useLogicState = () => {
  const [showForm, setShownForm] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [category, setCategory] = useState('today')
  // const [error, setError] = useState(null as string | null)
  const [loading, setLoading] = useState(false)
  const inputFileRef = useRef<any>(null)
  const navigate = useNavigate()

  const onSubmit = async () => {
    try {
      setLoading(true)
      const response = await services1.blog.addPost({ title, text, imageUrl, category })
      navigate('/')
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
      // resetStates()
    }
  }
  //
  // const handleChangeFile = async (event: any) => {
  //   try {
  //     const formData = new FormData()
  //     const file = event.target.files[0]
  //     formData.append('image', file)
  //     const { data } = await axios.post('/upload/', formData)
  //     setImageUrl(data.url)
  //     console.log(imageUrl)
  //   } catch (err) {
  //     console.warn(err)
  //   }
  // }

  const resetStates = () => {
    setTitle('')
    setText('')
  }
  const onClickRemoveImage = () => {}

  const fileds = {
    title,
    text,
    imageUrl,
    category,
  }
  // const onSubmit = async () => {
  //   try {
  //     const { data } = await axios.post('/posts', fileds)
  //     // const id = data._id
  //     navigate('/')
  //   } catch (err) {
  //     console.warn(err)
  //   }
  // }
  const handleChangeFile = async (event: any) => {
    try {
      const formData = new FormData()
      const file = event.target.files[0]
      formData.append('image', file)
      const { data } = await axios.post('/upload/', formData)
      setImageUrl(data.url)
      console.log(imageUrl)
    } catch (err) {
      console.warn(err)
    }
  }

  return {
    showForm,
    setShownForm,
    title,
    setTitle,
    text,
    setText,
    imageUrl,
    setImageUrl,
    inputFileRef,
    handleChangeFile,
    onClickRemoveImage,
    onSubmit,
  }
}

export const { ContextProvider: AddBlogContextProvider, Context: AddBlogContext } =
  genericHookContextBuilder(useLogicState)

export const AddBlogUseContext = () => {
  return (
    <AddBlogContextProvider>
      <AddGoalPage />
    </AddBlogContextProvider>
  )
}
