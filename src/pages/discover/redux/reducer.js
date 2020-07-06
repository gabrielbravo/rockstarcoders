import {
    MOVIES_GET_START_ASYNC,
    MOVIES_GET_SUCCESS,

    MOVIES_SET_ERROR,

    MOVIES_SEARCH_START_ASYNC,
    MOVIES_SEARCH_SUCCESS,
    
} from './constants';


export const initialState = {  
    loading: true,
    error: false, 
    message: '',
    movies: null,
    original_movies: null
  };

export const reducerMovies = (state = initialState, action) => {
  switch (action.type) {

    case MOVIES_SET_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.error,
      };

    case MOVIES_GET_START_ASYNC:
        return { 
          ...initialState, 
          loading: true 
        };
  
    case MOVIES_GET_SUCCESS:        
      return {
          ...state,
          movies: action.payload.movies,
          loading: false,
          error: false
      }

    case MOVIES_SEARCH_START_ASYNC: 
      return { 
        ...state, 
        loading: true,
        error: false
      };

    case MOVIES_SEARCH_SUCCESS:        
      return {
          ...state,
          movies: action.payload.movies,
          loading: false,
          error: false
      }
  
    default:
        return state;
    }
};
