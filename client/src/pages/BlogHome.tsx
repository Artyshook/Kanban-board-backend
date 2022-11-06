import React, {useContext, useReducer, useState} from 'react'
import styled from 'styled-components'
import { SearchBar } from '../components/SearchBar'
import { BlogItem, BlogType } from './BlogItem'
import { ArticleForm } from '../components/ArticleForm'
import { CgAddR } from 'react-icons/cg'
import { v1 } from 'uuid'
import { useLocalStorage } from '../helpers/functions'
import axios from "../axios";



export const BlogHome = () => {


  const [showForm, setShownForm] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  // const [posts, setPosts] = useLocalStorage('blog', [] as BlogType[])
  const [alertMessage, setAlertMessage] = useState(false)
  const [searchKey, setSearchKey] = useState('')

  const [postsArray, setPostsArray]=useLocalStorage('posts',[] as BlogType[] )
  axios.get('/posts').then(res=>setPostsArray(res.data))

  const onAddPostHandler = () => {
    const newPost = {
      id: v1(),
      category,
      title,
      text,
      createdAt: new Date(),
    }
    if (title && text && category) {
      // setPosts([newPost, ...posts])
      setShownForm(false)
      setAlertMessage(false)
      setTitle('')
      setText('')
      setCategory('')
    } else {
      setAlertMessage(true)
    }
  }

  // const filterPosts = () => {
  //   if (searchKey) {
  //     return posts.filter(el => el.title.includes(searchKey))
  //   } else return posts
  // }

  return (
    <Container>
      <HeaderWrapper>
      </HeaderWrapper>
      {/*<SearchBar value={searchKey} searchKey={setSearchKey} clearSearch={() => setSearchKey('')} />*/}
      {/*<button onClick={() => setShownForm(true)}>*/}
      {/*  <CgAddR size='2rem' />*/}
      {/*  <div>Add article</div>*/}
      {/*</button>*/}
      {/*<ArticleForm*/}
      {/*  setShownForm={setShownForm}*/}
      {/*  show={showForm}*/}
      {/*  setTitle={setTitle}*/}
      {/*  title={title}*/}
      {/*  setText={setText}*/}
      {/*  text={text}*/}
      {/*  addPost={onAddPostHandler}*/}
      {/*  category={category}*/}
      {/*  setCategory={setCategory}*/}
      {/*  alert={alertMessage}*/}
      {/*/>*/}

      <PostWrapper>
        {postsArray.map(post => (
          <BlogItem post={post} />
        ))}
      </PostWrapper>
    </Container>
  )
}

const Container = styled.div``

const HeaderWrapper = styled.div`
  background-color: white;
  padding: 20px;
  text-align: center;
`
const H2 = styled.h2`
  color: #0080ff;
  font-size: 2rem;
`
const P = styled.p`
  color: #a9a9a9;
  font-weight: 500;
`
const PostWrapper = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 0 50px;
`
