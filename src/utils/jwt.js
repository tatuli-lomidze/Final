import {jwtDecode} from 'jwt-decode'

export const parseToken = (token) => {
    return jwtDecode (token); 
     
}

export const toggleLocalStorage = (token) => {
    if (token) {
        localStorage.setItem('accessToken', token)
    }
    else {
        localStorage.removeItem('accessToken')
    }
}

export const isTokenValid = (token) => {
    const currentDate = Date.now()
    const user= parseToken(token);
    return currentDate > user.exp
}