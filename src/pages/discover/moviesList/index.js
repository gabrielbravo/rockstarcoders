import React from "react";
import { Col, Alert } from "antd";
import MovieCard from './../movieCard/loadable';
import "./moviesList.scss";

const MoviesList = props => {
    const {
        movies
      } = props;

    return (
        
        movies.length === 0 ?
        <Col span={12} offset={6}>
            <Alert message="UPS! No movies found" type="warning" />
        </Col>
        :
        movies.map(movie=> {
            return (<Col key={movie.id} xs={4} className="movie-catalog">
                <MovieCard movie={movie} />
            </Col>)
        })
        
    );
}

export default MoviesList;