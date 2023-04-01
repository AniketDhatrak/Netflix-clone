import React from 'react';
import './Card.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card(props) {
  const [video, setVideo] = useState('');
  // const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
  const youtubeUrl = 'https://www.youtube.com/embed/';
  const [isHovered, setIsHovered] = useState(false);

  const mouseOver = () => setIsHovered(true);
  const mouseLeave = () => setIsHovered(false);

  const fetchURL = async () => {
    try {
      const response = await axios.get(`/movie/${props.id}/videos`);
      if (response.data.results[0].key) {
        setVideo(response.data.results[0].key);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchURL();
  }, []);

  return (
    <div className="card" onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
      {!isHovered ? (
        <img className="card_poster" src={props.poster} alt='poster' />
      ) : (
        <iframe
          src={`${youtubeUrl}${video}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='YouTube video player'
          width='100%'
          height='100%'
          frameBorder='0'
        ></iframe>
      )}
        {/* <h1 className="card_title">{props.title}</h1> */}
    </div>
  );
}