import {
    MOVIE_GET_START_ASYNC,
    MOVIE_GET_SUCCESS,

    MOVIE_SET_ERROR,

    IMAGES_GET_START_ASYNC,
    IMAGES_GET_SUCCESS,

} from './constants';


export const initialState = {  
    loading: true,
    error: false, 
    message: '',
    movie: null,
    images: null
  };

  export const reducerMovie = (state = initialState, action) => {
    switch (action.type) {

      case MOVIE_SET_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          message: action.payload,
        };

      case MOVIE_GET_START_ASYNC:
          return { 
            ...initialState, 
            loading: true 
          };
    
      case MOVIE_GET_SUCCESS:     
        return {
            ...state,
            movie: action.payload.movie,
            images: action.payload.images,
            loading: false,
            error: false
        }

      case IMAGES_GET_START_ASYNC: 
        return { 
          ...state, 
          loading: true,
          error: false
        };

      case IMAGES_GET_SUCCESS:        
        return {
            ...state,
            images: action.payload.images,
            loading: false,
            error: false
        }
    
      default:
          return state;
      }
  };
  