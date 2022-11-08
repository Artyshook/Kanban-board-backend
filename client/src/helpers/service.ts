import { BlogData } from '../pages/BlogContext'

type InputData = {
  title: string
  text: string
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

export const services = {
  blog: {
    list: async () => {
      console.log('hey3')
      const response = await fetch(getPosts)
      console
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as BlogData[]
    },
    addNewPost: async (post: InputData) => {
      const response = await fetch(getPosts, {
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
