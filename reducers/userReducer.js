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
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_USER': {
            return {...state, fetching: true}
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
        default : {
            return state
            break;
        }
    }
}