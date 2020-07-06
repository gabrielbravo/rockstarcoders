import {
    MOVIES_GET_START,
    MOVIES_GET_START_ASYNC,
    MOVIES_GET_SUCCESS,

    MOVIES_SEARCH_START,
    MOVIES_SEARCH_START_ASYNC,
    MOVIES_SEARCH_SUCCESS, 

    MOVIES_SET_ERROR
    
} from './constants';


export const getMovies = (order) => ({
  type:MOVIES_GET_START,    
  payload: { order }
});

export const getMoviesAsync = () => ({
  type:MOVIES_GET_START_ASYNC,
});

export const getMoviesSuccess = movies => ({
  type:MOVIES_GET_SUCCESS,
  payload: { movies },
});


export const searchMovies = (title) => ({
  type:MOVIES_SEARCH_START,    
  payload: { title }
});

export const searchMoviesAsync = () => ({
  type:MOVIES_SEARCH_START_ASYNC,
});

export const searchMoviesSuccess = movies => ({
  type:MOVIES_SEARCH_SUCCESS,
  payload: { movies },
});

export const setError = error => ({
  type:MOVIES_SET_ERROR,
  payload: { error },
});
