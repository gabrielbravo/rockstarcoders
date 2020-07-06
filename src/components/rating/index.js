import React from 'react';
import StartRatings from 'react-star-ratings';


const Rating = props => {
    const { rating, changeRating } = props;
    return (
        <StartRatings
            rating={rating}
            starRatedColor="blue"
            changeRating={changeRating}
            numberOfStars={5}
            name='rating'
          />
    )
}

export default Rating;