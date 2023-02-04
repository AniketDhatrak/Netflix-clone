// import React from 'react';
// import './Card.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

export default function Card(props) {
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
  
  return (
    <div>
        <img className='card_poster' src={imageUrl} alt='poster' />
    </div>
  );
}