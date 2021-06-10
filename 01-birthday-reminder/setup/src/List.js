import React from 'react';

const List = props => {
  const {birthdays} = props
  return (
    <>
      {birthdays.map(birthday => {
        const {id, name, age, image} = birthday
        return (
          <article key={id} className='person'>
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
