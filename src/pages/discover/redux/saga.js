import { takeLatest, put, delay, call } from 'redux-saga/effects';

import { MOVIES_GET_START, MOVIES_SEARCH_START } from './constants';

import { 
    getMoviesAsync, 
    getMoviesSuccess, 
    searchMoviesAsync,
    searchMoviesSuccess,
    setError,

} from './actions';

import { API_getMovies, API_searchMovies } from '../../../services/moviesService';

export default function* TicketsSaga() {
    yield takeLatest(MOVIES_GET_START, loadMovies);
    yield takeLatest(MOVIES_SEARCH_START, searchMovies);
}

function* loadMovies({ payload }) {
    const { order } = payload;
    yield put(getMoviesAsync());
    yield delay(1000);
    try{
        const response = yield call(API_getMovies, order);
        if(response.status===200){
            yield put(getMoviesSuccess(response.data.results));
        }
        else{
            yield put(setError('Error fetching movies'));
        }
    }
    catch(ex){
        yield put(setError(ex.message));
    }
}

function* searchMovies({ payload }){
    const { title } = payload;
    yield put(searchMoviesAsync());

    try{
        const response = yield call(API_searchMovies, title);
        if(response.status===200){
            yield put(searchMoviesSuccess(response.data.results));
        }else{
            yield put(setError('Error searching movies'));
        }
    }
    catch(ex){
        yield put(setError(ex.message));
    }
}