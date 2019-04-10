import axios from 'axios';

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";
export const FETCH_USERS_PROJECT_SUCCESS = "FETCH_USERS_PROJECT_SUCCESS";
export const FETCH_USERS_PROJECT_FAILED = "FETCH_USERS_PROJECT_FAILED";

export function fetchUsers(userName) {
    return function(dispatch) {
        axios.get(`https://api.github.com/users/${userName}`)  //
            .then( response => {
                dispatch({type: FETCH_USERS_SUCCESS, payload: response});
            })
            .catch( err => {
                dispatch({type: FETCH_USERS_FAILED, payload: err});
            });
        axios.get(`https://api.github.com/users/${userName}/starred`)  //
            .then( response => {
                dispatch({type: FETCH_USERS_PROJECT_SUCCESS, payload: response});
            })
            .catch( err => {
                dispatch({type: FETCH_USERS_PROJECT_FAILED, payload: err});
            })
    }
}