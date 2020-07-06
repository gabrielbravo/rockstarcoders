import { takeLatest, put, call } from 'redux-saga/effects';

import { MOVIE_GET_START } from './constants';

import { 
    getMovieAsync, 
    getMovieSuccess, 
    setError,

} from './actions';


import { API_getMovie, API_getImages } from './../../../services/moviesService';

export default function* TicketsSaga() {
    yield takeLatest(MOVIE_GET_START, getMovie);

}

function* getMovie({ payload }) {
    const { id } = payload;
    yield put(getMovieAsync());

    try{
        let movie = null;
        let images = null;

        const responseMovie = yield call(API_getMovie, id);
        if(responseMovie.status===200){
            movie = responseMovie.data;
        }
        else{
            yield put(setError('Error fetching movies'));
        }

        const responseImages = yield call(API_getImages, id);
        if(responseImages.status===200){
            images = responseImages.data.posters;
        }
        else{
            yield put(setError('Error fetching Images'));
        }

        yield put(getMovieSuccess(movie, images));
    }
    catch(ex){
        yield put(setError(ex.message));
    }
}