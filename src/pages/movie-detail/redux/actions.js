import {
    MOVIE_GET_START,
    MOVIE_GET_START_ASYNC,
    MOVIE_GET_SUCCESS,

    IMAGES_GET_START,
    IMAGES_GET_START_ASYNC,
    IMAGES_GET_SUCCESS, 

    MOVIE_SET_ERROR
    
} from './constants';


export const getMovie = (id) => ({
  type:MOVIE_GET_START,    
  payload: { id }
});

export const getMovieAsync = () => ({
  type:MOVIE_GET_START_ASYNC,
});

export const getMovieSuccess = (movie, images) => ({
  type:MOVIE_GET_SUCCESS,
  payload: { movie, images },
});

export const getImages = (id) => ({
    type:IMAGES_GET_START,    
    payload: { id }
  });
  
  export const getImagesAsync = () => ({
    type:IMAGES_GET_START_ASYNC,
  });
  
  export const getIimagesSuccess = images => ({
    type:IMAGES_GET_SUCCESS,
    payload: { images },
  });
  
  export const setError = error => ({
    type:MOVIE_SET_ERROR,
    payload: error,
  });
  