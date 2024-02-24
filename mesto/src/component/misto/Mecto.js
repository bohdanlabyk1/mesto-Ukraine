import React, { useState } from 'react';
import { AiFillHeart } from "react-icons/ai";
import './misto.css';

const Mecto = (props) => {
  const [likes, setLikes] = useState(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likes')) || {};
    return storedLikes;
  });

  const handleLike = (misId) => {
    setLikes((prevLikes) => {
      const updatedLikes = {
        ...prevLikes,
        [misId]: (prevLikes[misId] || 0) + 1,
      };
      localStorage.setItem('likes', JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  return (
   <div className='content'>
      <div className='grid'>
    {props.misto.map((item) => (
      <div key={item.id} className='image'>
        <img src={item.img} alt={item.title} />
        <div className='main'>
          <h2>{item.title}</h2>
          <AiFillHeart className='btn' onClick={() => handleLike(item.id)} /> 
          {likes[item.id] && <p>{likes[item.id]}</p>}
        </div>
      </div>
    ))}
    </div>
    </div>
);
};
  
export default Mecto;