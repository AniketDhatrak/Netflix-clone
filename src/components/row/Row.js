import { useState, useEffect } from 'react';
import axios from 'axios';
import './Row.css';
import Card from '../card/Card';

export default function Row(props) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(props.url);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchMovies();
  });

  return (
    <div className='row_wrapper'>
    <h3 className='row_title'>{props.title}</h3>
    <div className='row_card'>
     {movies.map((el, index) => {
        const img_src = `https:image.tmdb.org/t/p/original/${el.backdrop_path}`;
        return (
        <Card title={el.title} poster={img_src} key={index} id={el.id} />
        );
      })}
    </div>
    </div>
  );
}