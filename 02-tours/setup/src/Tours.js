import React from 'react';
import Tour from './Tour';
const Tours = props => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {props.tours.map(tour => <Tour key={tour.id} removeTour={props.removeTour} {...tour}/>)}
      </div>
    </section>
  )
};

export default Tours;
