export default function reducer(state={
    user:{
        id: null,
        userName: null,
        password: null,
        shortHandName: null
    },
    joke: "\"Whenever the cashier at the grocery store asks my dad if he would like the milk in a bag he replies, 'No, just leave it in the carton!\"",
    fetching: false,
    fetched: false,
    error: null,
    loginTry: false
}, action) {
    switch (action.type) {
        case 'FETCH_USER': {
            return {...state, loginTry: true}
            break;
        }
        case 'FETCH_USER_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }
        case 'FETCH_USER_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
        }
        case 'SET_USER': {
            return {...state, user: action.payload, loginTry: false}
        }
        case 'LOGOUT': {
            return {
                ...state,
                id: null,
                userName: null,
                password: null,
                shortHandName: null,
            }
            break;
        }
        default : {
            return state
            break;
        }
    }
}