export default function reducer(state = {
    class: [],
    selected: null,
    fetching: true,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_CLASSES': {
            console.log(action.payload)
            return { ...state, fetching: action.payload }
            break;
        }
        case 'FETCH_CLASSES_REJECTED': {
            console.log(action.payload)
            return { ...state, fetching: false, error: action.payload }
        }
        case 'FETCH_CLASSES_FULFILLED': {
            console.log(action.payload)
            return {
                ...state,
                fetching: false,
                fetched: true,
                class: action.payload.class,
                selected: action.payload.class[0],
            }
            break;
        }
        case 'SET_SELECTED': {
            return {
                ...state,
                selected: action.payload.selected
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                class:[]
            }
            break;
        }
        default: {
            return state
            break;
        }
    }
}