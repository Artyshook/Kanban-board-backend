import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Select from 'react-select/base'
import { ValueType } from 'react-select'

type AddFormPropsType = {
  setShownForm: (formShown: boolean) => void
  show: boolean
  setTitle: (title: string) => void
  title: string
  setText: (text: string) => void
  text: string
  addPost: (add: boolean) => void
  category: string
  setCategory: (category: string) => void
  alert: boolean
}

interface Option {
  value: string
  label: string
}
const options = [
  { value: 'life style', label: 'Life style' },
  { value: 'health care', label: 'Health care' },
  { value: 'work', label: 'Work' },
  { value: 'study', label: 'Study' },
  { value: 'travel', label: 'Travel' },
  { value: 'other', label: 'Other' },
]

export const ArticleForm = (props: AddFormPropsType) => {
  return (
    <div>
      <ModalWrapper
        show={props.show}
        onHide={() => {
          props.setShownForm(false)
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Start your new story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Enter a title for your post</Form.Label>
              <Form.Control
                as='input'
                value={props.title}
                onChange={event => {
                  props.setTitle(event.currentTarget.value)
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Chose categoty</Form.Label>
              <Select
                options={options}
                value={options.filter(option => option.value === props.category)}
                onChange={(e: ValueType<Option>) => {
                  if (e === null) return
                  props.setCategory((e as Option).value)
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Add text, We support Markdown :)</Form.Label>
              <Form.Control
                value={props.text}
                as='textarea'
                rows={10}
                onChange={event => {
                  props.setText(event.currentTarget.value)
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        {props.alert && <Form.Label>Check your input, you missed something</Form.Label>}
        <Modal.Footer>
          <Button variant='primary' onClick={() => props.addPost(true)}>
            Save
          </Button>
        </Modal.Footer>
      </ModalWrapper>
    </div>
  )
}

const ModalWrapper = styled(Modal)`
  padding-top: 100px;
`
