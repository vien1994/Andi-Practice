import React from 'react'
import './Navbar.css';
import Button from './Button';

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <div onClick={() => {props.redirectPage('home')}}>Home</div>
      <div onClick={() => {props.redirectPage('about')}}>About Us</div>
      <div onClick={() => {props.redirectPage('contact')}}>Contact Us</div>
      <Button btnText={'Andi is nice'} alertMessage={'HIIII'}/>
      <Button btnText={'Submit'} alertMessage={'BYEEE'}/>
    </div>
  )
}
