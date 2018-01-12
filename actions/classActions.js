import axios from 'axios'

const URL = 'http://api.nicklasmolving.com/'

export function setSelected(selected) {
    return {
        type: 'SET_SELECTED',
        payload: {
            selected: selected
        }
    }
}

export function fetchClasses(student) {
    return function (dispatch) {
        dispatch({ type: 'FETCH_CLASSES', payload: { fetching: true } })
        axios.get(URL + 'api/classes/student?student=' + student)
            .then((response) => {
                console.log(response)
                dispatch({
                    type: 'FETCH_CLASSES_FULFILLED',
                    payload: { class: response.data }
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'FETCH_CLASSES_REJECTED',
                    payload: { err }
                })
            })
    }
}

export function updateAttendance(_id, student, id) {
    return function (dispatch) {
        dispatch({ type: 'FETCH_CLASSES', payload: { fetching: true } })
        axios.get(URL + 'api/register/data?_id=' + _id + '&student=' + student + '&id=' + id)
            .then((response) => {
                axios.get(URL + 'api/classes/student?student=' + student)
                    .then((response) => {
                        console.log(response)
                        dispatch({
                            type: 'FETCH_CLASSES_FULFILLED',
                            payload: { class: response.data }
                        })
                    })
                    .catch((err) => {
                        dispatch({
                            type: 'FETCH_CLASSES_REJECTED',
                            payload: { err }
                        })
                    })
            })
            .catch((err) => {
                dispatch({
                    type: 'FETCH_CLASSES_REJECTED',
                    payload: { err }
                })
            })
    }
}

export function logout(){
    return {
        type: 'LOGOUT'
    }
}