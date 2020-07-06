import axios from 'axios';

export const API_getMovies = async (order) => {
    let response = null;
    const url = `${process.env.REACT_APP_API_DISCOVER}?api_key=${process.env.REACT_APP_API_KEY}&sort_by=${order}`;
    await axios.get(url)
    .then(res => response = res)
    .catch(error => { throw error })  
    
    return response;
};

export const API_searchMovies = async (title) => {
    let response = null;
    const url = `${process.env.REACT_APP_API_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&query=${title}`;
    await axios.get(url)
    .then(res => response = res)
    .catch(error => { throw error })  
    
    return response;
}

export const API_getMovie = async (id) => {
    let response = null;
    const url = `${process.env.REACT_APP_API_MOVIE}${id}?api_key=${process.env.REACT_APP_API_KEY}`;
    await axios.get(url)
    .then(res => response = res)
    .catch(error => { throw error })  
    
    return response;
}

export const API_getImages = async (id) => {
    let response = null;
    const url = `${process.env.REACT_APP_API_IMAGES}${id}/images?api_key=${process.env.REACT_APP_API_KEY}`;
                
    console.log('url', url)
    await axios.get(url)
    .then(res => response = res)
    .catch(error => { throw error })  
    
    return response;
}

