import axios from 'axios';

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";


export function fetchUsers(userName) {
    return function(dispatch) {
        axios.get('https://developer.github.com/v3/users/')  //
            .then( response => getSortCity(response, temperature, humidity))
            .then( response => {
                dispatch({type: FETCH_USERS_SUCCESS, payload: response});
            })
            .then( response => {
                dispatch({type: FETCH_USERS_SUCCESS, payload: response});
            })
            .catch( err => {
                dispatch({type: FETCH_USERS_FAILED, payload: err});
            })
    }
}