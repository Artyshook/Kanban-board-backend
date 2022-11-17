import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../helpers/functions'
import Container from '@mui/material/Container'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const Header = () => {
  const [token, setToken] = useState<any>('')
  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  const navigate = useNavigate()
  const onClickHandler = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <Wrapper>
      <Container maxWidth='lg'>
        <WrapperDisplay>
          <LogoWrapper>
            <Link to={'/'}>|||</Link>
          </LogoWrapper>
          <WrapperButtons>
            {token && (
              <>
                {/*<ButtonStyle variant='contained'>*/}
                {/*  <Link to={'/'}>My Posts </Link>*/}
                {/*</ButtonStyle>*/}
                <ButtonStyle variant='contained'>
                  <Link to={'/new'}>+ Task </Link>
                </ButtonStyle>
              </>
            )}
            {token ? (
              <LogoutButton variant='contained' color='error' onClick={onClickHandler}>
                Logout
              </LogoutButton>
            ) : (
              <ButtonStyle variant='contained'>
                <Link to={'/login'}>Login </Link>
              </ButtonStyle>
            )}
          </WrapperButtons>
        </WrapperDisplay>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 30px;
`
const WrapperDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`
const WrapperButtons = styled.div``
const ButtonStyle = styled(Button)`
  && {
    margin: 10px;
  }
`
const LogoutButton = styled(Button)`
  background-color: #9b1237;

  && {
    margin: 10px;
  }
`
const LogoWrapper = styled.div`
  background-color: #532293;
  color: #fff;
  font-weight: 700;
  line-height: 35px;
  text-transform: uppercase;
  letter-spacing: 0.15px;
  border-radius: 5px;
  padding: 0 10px;
  text-decoration: none;

  && {
    margin: 10px;
  }

  &:hover {
    background-color: #4361ee;
  }
`
