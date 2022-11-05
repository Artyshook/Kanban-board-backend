import React from 'react'
import styled from 'styled-components'

type PropsType = {
  value: string
  searchKey: (handleSearchKey: string) => void
  clearSearch: (clearSearch: boolean) => void
}

export const SearchBar = (props: PropsType) => {
  const onSearchHandler = (e: string) => {
    props.searchKey(e)
  }
  return (
    <SearchBarWrapper>
      <FormWrapper>
        <InputWrapper
          type='text'
          placeholder='Search key word'
          value={props.value}
          onChange={e => onSearchHandler(e.currentTarget.value)}
        />
        {props.value && <SpanWrapper onClick={() => props.clearSearch(true)}>X</SpanWrapper>}
        <ButtonWrapper>Go</ButtonWrapper>
      </FormWrapper>
    </SearchBarWrapper>
  )
}
const SearchBarWrapper = styled.div`
  background-color: #f0f0f0;
  width: fit-content;
  margin: 1.5rem auto 2rem auto;
  padding: 0.5rem;
  border-radius: 5px;
`
const FormWrapper = styled.form`
  display: flex;
  align-items: center;
`
const InputWrapper = styled.input`
  background-color: #f0f0f0;
  outline: none;
  border: none;
`
const SpanWrapper = styled.span`
  padding-right: 0.5rem;
  cursor: pointer;
`
const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  padding: 0.3rem 1rem;
  border-radius: 5px;
  background-color: #0f52ba;
  color: #fff;
`
