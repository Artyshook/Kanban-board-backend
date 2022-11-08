import { ArticleForm } from '../components/ArticleForm'
import { BlogContext } from './BlogContext'
import { BlogItem, BlogType } from './BlogItem'
import { CgAddR } from 'react-icons/cg'
import { Grid } from '@mui/material'
import { SearchBar } from '../components/SearchBar'
import { SideBlock } from '../components/TagsBlock'
import { useLocalStorage } from '../helpers/functions'
import { v1 } from 'uuid'
import React, { useContext, useReducer, useState } from 'react'
import axios from '../axios'
import styled from 'styled-components'

export const BlogHome = () => {
  const logic = useContext(BlogContext)

  const [showForm, setShownForm] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  // const [posts, setPosts] = useLocalStorage('blog', [] as BlogType[])
  const [alertMessage, setAlertMessage] = useState(false)
  const [searchKey, setSearchKey] = useState('')

  // const [postsArray, setPostsArray] = useLocalStorage('posts', [] as BlogType[])
  // axios.get('/posts').then(res => setPostsArray(res.data))

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
    <div>
      <HeaderWrapper></HeaderWrapper>
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
      <Grid container spacing={4}>
        <Grid xs={8} item>
          <PostWrapper>
            {logic.data.reverse().map(post => (
              <BlogItem key={post._id} post={post} />
            ))}
          </PostWrapper>
        </Grid>
        <Grid xs={4} item>
          <SideBlock items={['react', 'typescript', 'заметки']} isLoading={false} />
          {/*<CommentsBlock*/}
          {/*  items={[*/}
          {/*    {*/}
          {/*      user: {*/}
          {/*        fullName: 'Вася Пупкин',*/}
          {/*        avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',*/}
          {/*      },*/}
          {/*      text: 'Это тестовый комментарий',*/}
          {/*    },*/}
          {/*    {*/}
          {/*      user: {*/}
          {/*        fullName: 'Иван Иванов',*/}
          {/*        avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',*/}
          {/*      },*/}
          {/*      text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*  isLoading={false}*/}
          {/*/>*/}
        </Grid>
      </Grid>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
`

const PostsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  padding-bottom: 10px;
  //border: 2px solid green;
`

const HeaderWrapper = styled.div`
  background-color: white;
  //padding: 20px;
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
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  border-radius: 7px;
  gap: 1rem;
`
