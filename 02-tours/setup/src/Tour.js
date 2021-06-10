import React, { useState } from 'react';

const Tour = ({id, image, info, name, price, removeTour}) => {
  const [readMore, setReadMore] = useState(false)

  // const toggleReadMore = () => {
  //   setReadMore(prev => prev ? false : true)
  // }

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0,200)}...${<button>Read More</button>}`}
          <button className='read-more-btn' onClick={() => setReadMore(!readMore)}>{readMore ? "Read Less" : "Read More"}</button>
        </p>
        <button onClick={() => removeTour(id)} className='delete-btn'>Nahh</button>
      </footer>
    </article>
  )
};

export default Tour;
