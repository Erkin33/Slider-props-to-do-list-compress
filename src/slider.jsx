import React, { useState } from 'react';

function ImageToggle() {
  const [isToggled, setIsToggled] = useState(false);
  const [count, setcount] = useState(4)
  function mines(){
      setcount(count - 1)
  }
  function plus(){
      setcount(count + 1)
  }
  let firstNumber = Number; 
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className='Image'>
      <img
        src={isToggled ? '/images/2024Nissan.jpg' : '/images/porsche.jpg'}
        alt="Toggle image"
        onClick={handleClick}
      />
    </div>
  );
}

export default ImageToggle;