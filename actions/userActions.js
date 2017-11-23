export function fetchUser(){
    return {
        type: 'FETCH_USER_FULFILLED',
        payload: {
            userName: 'user',
            password: 'user',
            shortHandName: 'cph-userXXX'
        }
    }
}