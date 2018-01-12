export function setUser(user){
    return {
        type: 'SET_USER',
        payload: {
            userName: user.firstName +' '+ user.lastName,
            password: user.password,
            shortHandName: user._id
        }
    }
}

export function fetchUser(){
    return{
        type: 'FETCH_USER',
        payload: {
            loginTry: true
        }
    }
}

export function authUserFailed(){
    return{
        type: 'FETCH_USER_REJECTED'
    }
}

export function logout(){
    return {
        type: 'LOGOUT'
    }
}