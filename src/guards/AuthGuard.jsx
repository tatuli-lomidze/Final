import React from 'react'
import { useAppContext } from '../context/AppContextProvider'
import IsNotLoggedInUi from '../components/Register and Login/IsNotLoggedInUi';

const AuthGuard = ({children}) => {
    const {state} = useAppContext();

    if(!state.isUserLoggedIn) {
         return (<div>
           <IsNotLoggedInUi/>
         </div>)
    }
  return (
    <>{children}</>
  )
}

export default AuthGuard