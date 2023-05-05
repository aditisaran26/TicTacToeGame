import React from 'react';

function Square(props) {
  return (
    <div onClick={props.onClick}
    className='square'> 
      <h2>{props.value}</h2>
    </div>
  );
}

export default Square;
