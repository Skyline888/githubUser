import  {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    FETCH_USERS_PROJECTS_REQUEST,
    FETCH_USERS_PROJECTS_SUCCESS,
    FETCH_USERS_PROJECTS_FAILED,
} from '../../action';


const intialState = {
    fetching: true,
    fetched: false,
    projects: [],
    users: [],
    errors: []
};

export default function reducer(state=intialState, action) {
    switch (action.type) {
        case FETCH_USERS_REQUEST:{
            return {
                ...state,
                fetching: false,
            };
        }
        case FETCH_USERS_PROJECTS_REQUEST:{
            return {
                ...state,
                fetching: false,
            };
        }
        case FETCH_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload, //...state.data, action.payload
                fetched: true,
                fetching: false
            };
        }
        case FETCH_USERS_PROJECTS_SUCCESS: {
            return {
                ...state,
                projects: action.payload, //...state.data, action.payload
                fetched: true,
                fetching: false
            };
        }
        case FETCH_USERS_FAILED: {
            return {
                ...state,
                error: action.payload,
                fetched: true,
                fetching: false
            };
        }
        case FETCH_USERS_PROJECTS_FAILED: {
            return {
                ...state,
                error: action.payload,
                fetched: true,
                fetching: false
            };
        }
        default: return state
    }
}