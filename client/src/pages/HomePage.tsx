import { Login } from './Login'
import { Registration } from './Registration'
import React from 'react'

export const HomePage = () => {
  return (
    <div>
      <div>
        <Login />
      </div>
      <div>
        <Registration />
      </div>
    </div>
  )
}
