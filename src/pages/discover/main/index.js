import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from "../../../utils/injectSaga";
import { getMovies, searchMovies } from '../redux/actions';
import { Row, Col, Alert } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import saga from '../redux/saga';
import Search from '../../../components/search/loadable';
import Rating from '../../../components/rating/loadable';
import MoviesList from '../moviesList/index';
import Footer from "../../../components/footer/loadable";
import Loading from "../../../components/loading/loadable";
import './discover.scss';

const App = (props) => { 
  useInjectSaga({ key: 'MoviesSaga', saga });
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [titleSearch, setTitleSearch] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [rating, setRating] = useState(0);
  const { location, history } = props;

  useEffect(()=> {
    
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;
      setTitleSearch(s);
      
      if(titleSearch.length > 0){
        dispatch(searchMovies(titleSearch));
      }
      else{
        dispatch(getMovies('popularity.desc'));
      }

    })();
  }, [location.search]);

  useEffect(() => {
    setMoviesList(state.MoviesReducer.movies);
  }, [state.MoviesReducer])


  const handleTitle = async (e) => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    history.push(`?${queryString.stringify(urlParams)}`);
    setTitleSearch(e.target.value);
  }

  const changeRating = (newRating, name ) => {
    setRating(newRating);

    const since = (newRating * 2)-2;
    const to = (newRating*2);
    const newMovies = state.MoviesReducer.movies.filter(m => m.vote_average >=since && m.vote_average <= to);

    setMoviesList(newMovies);
  }

  return (
    
    <Row>
      <Col span={24} className="search">
        <h1>Find your movie</h1>
        <Search titleSearch={titleSearch} handleTitle={handleTitle} />
      </Col>
      <Col span={24} className="rating">
        <Rating rating={rating} changeRating={changeRating} />
      </Col>
      <Row>
          <Col span={24}>
            {
              state.MoviesReducer.error ?
              <Alert message="UPS! An error ocurred" type="warning" />
              :
              state.MoviesReducer.loading ?
              <Col span={12} offset={6}>
                <Loading />
              </Col>
              :
              moviesList &&
              <MoviesList movies={moviesList} />
            }
          </Col>
      </Row>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

export default withRouter(App);
