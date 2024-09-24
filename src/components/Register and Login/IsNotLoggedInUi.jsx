import React from 'react'
import routes from '../../constants/routes'
import { useNavigate } from 'react-router-dom'
import './IsNotLoggedInUi.scss'

const IsNotLoggedInUi = () => {
    const navigate = useNavigate()
  return (
    <div className='wrapper'>
         <h1>
             Sign in to unlock exclusive recipes!
            </h1>
            <div className='buttons' >
            <button onClick={() => {navigate(routes.signIn)}}>Sign In</button>
            <button onClick={() => {navigate(routes.signUp)}}>Sign Up</button>
            </div>
    </div>
  )
}

export default IsNotLoggedInUi