import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import Loading from "./../../components/loading/loadable";

import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from "./../../utils/injectSaga";
import { 
    getMovie, 
    
  } from './redux/actions';
  
  import saga from './redux/saga';

import "./detail.scss";

export default function Movie() {
    const state = useSelector(state => state);
    useInjectSaga({ key: 'MovieSaga', saga });
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(()=> {
    
        (async () => {
          dispatch(getMovie(id));
        })();
      }, []);

    useEffect(() => {
        
    }, [state.MovieReducer])

    return (
        state.MovieReducer && state.MovieReducer.movie ?
        <RenderMovie movieInfo={state.MovieReducer.movie} images={state.MovieReducer.images} />
        :
        <Loading />
    )
}

function RenderMovie(props) {
    
  const {
    movieInfo: { backdrop_path, poster_path },
    images
  } = props;
  const backdropPath = `${process.env.REACT_APP_URL_IMAGE}${backdrop_path}`;

  return (
    <div
      className="movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="movie__dark" />
      <Row>
        <Col span={8} offset={3} className="movie__poster">
            <PosterMovie image={poster_path} /> 
        </Col>
        <Col span={12} className="movie__info">
          <MovieInfo movieInfo={props.movieInfo} images={images} />
        </Col>
      </Row>
    </div>
  );
}

function PosterMovie(props) {
  const { image } = props;
  const posterPath = `https://image.tmdb.org/t/p/original${image}`;

  return <div style={{ backgroundImage: `url('${posterPath}')` }} />;
}


function MovieInfo(props) {
  const {
    movieInfo: { title, release_date, overview },
    images
  } = props;
  
  return (
    <>
      <div className="movie__info-header">
        <h1>
          {title}
          <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
        </h1>
        
      </div>
      <div className="movie__info-content">
        <h3 key={1}>General</h3>
        <p>{overview}</p>

        <h3 key={2}>Images</h3>
        <ImagesMovie images={images} />
      </div>
    </>
  );
}

function ImagesMovie(props){
    const { images } = props;
    return (
        images ?
        images.map(i=> {
            return <img key={i.file_path} src={`https://image.tmdb.org/t/p/original${i.file_path}`} width={50} alt="" />
        })
        :
        null
    )
}
