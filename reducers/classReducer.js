export default function reducer(state = {
    class: [],
    selected: null,
    fetching: true,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_CLASSES': {
            return { ...state, fetching: true }
            break;
        }
        case 'FETCH_CLASSES_REJECTED': {
            return { ...state, fetching: false, error: action.payload }
        }
        case 'FETCH_CLASSES_FULFILLED': {
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
        default: {
            return state
            break;
        }
    }
}