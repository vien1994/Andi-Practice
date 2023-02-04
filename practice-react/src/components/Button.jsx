import React from 'react'
import './Button.css';

export default function Button(props) {
  const {alertMessage, btnText} = props;
  const handleClick = () => {
    console.log(alertMessage);
  }
  return (
    <button className='btn' onClick={handleClick}>{btnText}</button>
  )
}
