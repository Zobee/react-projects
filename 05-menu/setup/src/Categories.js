import React from 'react';

const Categories = (props) => {
  console.log(props.categories[0][0])
  return <div className='btn-container'>
    {props.categories[0]}
  </div>;
};

export default Categories;
