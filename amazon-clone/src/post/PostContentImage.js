import React from 'react';
import testimage from './testimage.jpg';
import './PostContentImage.css';

function PostContentImage() {
  return (
    <div className='content'>
      <div className='content__body'>
        <img
          className='content__image'
          src={testimage}
          alt='' />
      </div>
    </div>
  )
}

export default PostContentImage;