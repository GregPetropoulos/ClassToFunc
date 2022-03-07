import React, { useEffect, useState } from 'react';
import Kittens from './Kittens';
const ChangeCat = () => {
  const [catInfo, setCatInfo] = useState({
    name: 'Tartar',
    color: 'Yellow',
    kittens: 3
  });

  useEffect(() => {
    alert(
      "This was the componentDidMount in Cats.js but now it's a ChangeCat.js useEffect to the DOM"
    );
  }, []);

  const handleClick = (e) => setCatInfo({ ...catInfo, color: e.target.value });

  return (
    <>
      <h1 style={{ color: 'red' }}>A Functional Component</h1>

      <h2>
        Hello Cats. My name is {catInfo.name} and I am the color {catInfo.color}
        .
      </h2>
      <Kittens kittens={catInfo.kittens} />
      <button type='button' value='red' onClick={handleClick}>
        Functional Change Color
      </button>
    </>
  );
};

export default ChangeCat;
