/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './../utils/history';
import { reducerMovies } from './../pages/discover/redux/reducer';
import { reducerMovie } from './../pages/movie-detail/redux/reducer';


export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({    
    router: connectRouter(history),
    MoviesReducer: reducerMovies,
    MovieReducer: reducerMovie,
    //...injectedReducers,
  });

  return rootReducer;
}
