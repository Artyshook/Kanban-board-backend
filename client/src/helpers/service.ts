import { BlogData } from '../pages/BlogContext'
import axios from '../axios'

type InputData = {
  title: string
  text: string
  imageUrl: string
  category: string
}

type registerData = {
  email: string
  password: string
  fullName: string
}

type loginData = {
  email: string
  password: string
}

export const getPosts = `${process.env.REACT_APP_URL_BLOG}posts`
export const auth = `${process.env.REACT_APP_URL_BLOG}auth`
// export const getPostDetail = process.env.REACT_APP_URL_BLOG

export const services1 = {
  blog: {
    list: async () => {
      const response = axios.get('/posts').then(res => res.data)
      return (await response) as BlogData[]
    },
    getOnePost: async (id: string) => {
      const response = await fetch(`http://localhost:3222/posts/${id}`)
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as BlogData
      // const response = axios.get(`/posts/${id}`)
      // return (await response) as unknown as BlogData
    },
    addPost: async (post: InputData) => {
      const response = axios.post('/posts', post)
      return await response
    },
    deletePost: async (id: string) => {
      const response = await axios.delete(`/posts/${id}`)
      return await response
    },
    register: async (form: registerData) => {
      const response = await axios.post('/auth/register', form)
      return await response
    },
    login: async (loginForm: loginData) => {
      const response = axios.post('/auth/login', loginForm)
      return await response
    },
    userInfo: async () => {
      const response = await axios.get('/auth/me')
      return await response
    },
  },
  completedTask: {
    list: async () => {
      const response = axios.get('/upload').then(res => res.data)
      return (await response) as BlogData[]
    },
    addCompletedTask: async (post: InputData) => {
      const response = axios.post('/upload', post)
      return await response
    },
  },
}

export const services = {
  blog: {
    list: async () => {
      const response = await fetch('http://localhost:3222/posts')
      console
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as BlogData[]
    },
    uploadPhoto: async (url: string) => {},
    addNewPost: async (post: InputData) => {
      const response = await fetch('http://localhost:3222/posts', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(post),
      })
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as BlogData
    },
    getPost: async (blogSlug: string) => {
      const response = await fetch(`${getPosts}/${blogSlug}`)
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as BlogData
    },
    deletePost: async (blogSlug: string) => {
      const response = await fetch(`${getPosts}/${blogSlug}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as BlogData
    },
  },
  authentication: {
    register: async (input: registerData) => {},
    login: async (input: loginData) => {},
    me: async () => {},
  },
}
