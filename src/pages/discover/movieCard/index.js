import React from 'react';
import { Card } from "antd";
import { Link } from "react-router-dom";

const MovieCard = props => {
    const {
        movie: { id, title, poster_path, popularity }
    } = props;
    const { Meta } = Card;
    const posterPath = poster_path ? `${process.env.REACT_APP_URL_IMAGE}${poster_path}` : 'no-image.png';

    return (
    <Link to={`/movie/${id}`}>
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={posterPath} />}
        >
        <Meta title={title} description={`Popularity ${popularity}`} />
        </Card>
    </Link>
    );
}

export default MovieCard;