import appActions from "./appActions"

export const signIn = (payload) => {
     return {type: appActions.signInUser,
        payload,

     }
}

export const signOut = () => {
    return {type: appActions.signOutUser
       

    }
}