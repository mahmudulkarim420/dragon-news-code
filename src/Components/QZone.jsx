import React from 'react';
import classImg from '../assets/class.png'
import swimmingImg from '../assets/swimming.png'
import playgroundImg from '../assets/playground.png'
import bgImg from '../assets/bg.png'

const QZone = () => {
  return (
    <>
    <div className='bg-base-300 p-5 rounded-md'>
      <h2 className='font-bold mb-5'>Q-Zone</h2>
      <div className='space-y-5'>
        <img src={classImg} alt="" />
        <img src={swimmingImg} alt="" />
        <img src={playgroundImg} alt="" />
      </div>
    </div>
    <img src={bgImg} alt="" />
    </>
  );
};

export default QZone;