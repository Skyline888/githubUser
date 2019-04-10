import  {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    FETCH_USERS_PROJECT_SUCCESS,
    FETCH_USERS_PROJECT_FAILED,
} from '../../action';


const intialState = {
    fetching: true,
    fetched: false,
    usersInfo: [],
    userProject: [],
    error: [],
};

export default function reducer(state=intialState, action) {
    switch (action.type) {
        case FETCH_USERS_SUCCESS: {
            return {
                ...state,
                usersInfo: [...state.usersInfo, action.payload.data],
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
        case FETCH_USERS_PROJECT_SUCCESS: {
            return {
                ...state,
                userProject: [...state.userProject, action.payload.data],
                fetched: true,
                fetching: false
            };
        }
        case FETCH_USERS_PROJECT_FAILED: {
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