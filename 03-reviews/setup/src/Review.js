import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index,setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const setRandInd = () => {
    let randInd = Math.floor(Math.random() * people.length);
    setIndex(randInd)
  }
  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={() => setIndex(prev => prev === 0 ? people.length - 1 : prev - 1)}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={() => setIndex(prev => prev === people.length - 1 ? 0 : prev + 1)}>
        <FaChevronRight />
      </button>
    </div>
    <button className='random-btn' onClick={setRandInd}>Surprise Me</button>
  </article>;
};

export default Review;
