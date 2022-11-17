import { BlogData } from '../pages/BlogContext'
import { BlogType } from '../pages/BlogItem'
import { Link, useParams } from 'react-router-dom'
import { services1 } from '../helpers/service'
import { useAsyncComponentDidMount } from '../helpers/UseComponentDidMount'
import { useLocalStorage } from '../helpers/functions'
import React, { useState } from 'react'
import cover from '../images/ddl.jpg'
import styled from 'styled-components'

export const ArticlePage = () => {
  const { id } = useParams()
  // const [postsArray, setPostsArray] = useState(null as BlogData | null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null as string | null)
  const [blogData, setBlogData] = useState(null as BlogData | null)
  console.log(blogData)

  useAsyncComponentDidMount(async () => {
    try {
      setLoading(true)
      const response = await services1.blog.getOnePost(id!)
      setError(null)
      setBlogData(response)
    } catch (error) {
      setError(`fetching error`)
    }
    setLoading(false)
  })

  // console.log(postsArray)
  // const blog = postsArray?.find(post => post._id === id)
  // const date = () => {
  //   if (blog !== undefined) {
  //     return new Date(blog.createdAt).toLocaleDateString('en-US')
  //   }
  // }

  return (
    <Container>
      <LinkWrapper to={'/'}>
        <span> &#8592;</span> <span>Go Back</span>
      </LinkWrapper>
      {blogData && (
        <BlogWrapper>
          <Header>
            <h1>{blogData.title}</h1>
            <div>
              {/*<CategoryWrapper>*/}
              {/*  /!*<Chip label={blog.category} />*!/*/}
              {/*  <DateWrapper>Published at {date()}</DateWrapper>*/}
              {/*</CategoryWrapper>*/}
            </div>
          </Header>
          <ImgWrapper src={`http://localhost:3222${blogData.imageUrl}`} alt='cover' />
          <TextWrapper>{blogData.text}</TextWrapper>
        </BlogWrapper>
      )}
    </Container>
  )
}
const LinkWrapper = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  color: #a9a9a9;
  font-weight: 500;
  display: block;
  padding: 10px 20px;
`
const Header = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`
const BlogWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 95%;
  padding: 1rem 0;
  gap: 1rem;
`
const DateWrapper = styled.div`
  font-size: 12px;
  color: #a9a9a9;
  font-weight: 500;
`
const CategoryWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
`
const ImgWrapper = styled.img`
  width: 100%;
`
const TextWrapper = styled.p`
  padding: 1rem;
  margin-top: 1.5rem;
`
const Container = styled.div`
  max-width: 900px;
  background-color: white;
  box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  margin: 30px auto;
  width: 90%;
  padding: 1rem 0px;
  gap: 1rem;
`
