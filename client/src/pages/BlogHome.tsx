import { BlogContext } from './BlogContext'
import { BlogItem, BlogType } from './BlogItem'
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd'
import { Grid } from '@mui/material'
import { changeOrder, useLocalStorage } from '../helpers/functions'
import React, { useContext, useReducer, useState } from 'react'
import styled from 'styled-components'

export const BlogHome = () => {
  const logic = useContext(BlogContext)
  // const onDragEndHandler = (result: DropResult) => {
  //   if (!result.destination) return
  //   changeOrder(result.source.index, result.destination.index))
  // }

  const onDragEndHandler = (result: DropResult) => {
    if (!result.destination) return
    let change = changeOrder([...logic.data], result.source.index, result.destination.index)
    logic.setData(change)
    // logic.setData(changeOrder)
  }

  return (
    <div>
      <HeaderWrapper></HeaderWrapper>
      <Grid container spacing={4}>
        {/*<Grid xs={3} item>*/}
        {/*  <PostWrapper>*/}
        {/*    <div>Todo</div>*/}
        {/*    {logic.data.reverse().map(post => (*/}
        {/*      <BlogItem key={post._id} post={post} />*/}
        {/*    ))}*/}
        {/*  </PostWrapper>*/}
        {/*</Grid>*/}
        <Grid xs={3} item>
          <div>
            <div>Todo</div>
            <DragDropContext onDragEnd={onDragEndHandler}>
              <Droppable droppableId='post'>
                {provided => (
                  <ul {...provided.droppableProps} ref={provided.innerRef}>
                    {logic.data.map((post, index) => (
                      <Draggable key={post._id} draggableId={post._id} index={index}>
                        {(provided, snapshot) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <BlogItem key={post._id} post={post} />
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </div>

          {/*<PostWrapper>*/}
          {/*  <div>Completed</div>*/}
          {/*  {logic.completed.map(post => (*/}
          {/*    <BlogItem key={post._id} post={post} />*/}
          {/*  ))}*/}
          {/*</PostWrapper>*/}
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
const MapTodosWrapper = styled.span`
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`
