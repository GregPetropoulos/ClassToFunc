import React, { useState, useEffect } from 'react';

const Dogs = () => {
  const [dogInfo, setDogInfo] = useState({
    name: 'Bolt',
    color: 'White'
  });
  useEffect(() => {
    alert('The useEffect functional component');
  }, []);

  const handleClick = (e) => setDogInfo({ ...dogInfo, color: e.target.value });
  return (
    <>
      <h1 style={{ color: 'red' }}>A Functional Component</h1>
      <h2>Hello Dogs</h2>
      <h2>
        Hello Dogs. My name is {dogInfo.name} and I am the color {dogInfo.color}
        .
      </h2>

      <button type='button' value='orange' onClick={handleClick}>
        Functional Change Color
      </button>
    </>
  );
};

export default Dogs;
