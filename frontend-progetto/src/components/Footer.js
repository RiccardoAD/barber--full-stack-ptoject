import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-neutral-950 relative p-8 nav text-neutral-300 flex items-center justify-evenly'>
        
        <ul className='flex gap-1 flex-col items-center justify-center'>
        <img className='w-40' src={logo}></img>
          <Link className='text-white' to='/reservations'>Make A Reservation</Link>
          <Link className='text-white'to='/contact'>Contact Us</Link>
          <Link className='text-white'to='/reservations'>About Us</Link>
          <Link className='text-white'to='/team'>View Our Team</Link>
          <Link className='text-white'to='/services'>View Our Services</Link>
        </ul>
        <ul className='flex gap-4 flex-col items-center justify-center'>
          <img className='w-10 text-white' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png'></img>
          <img className='w-10' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'></img>
          <img className='w-10' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png'></img>
        </ul>
    </div>
  )
}

export default Footer