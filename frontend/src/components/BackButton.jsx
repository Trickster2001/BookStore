import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const BackButton = ({ desination = '/' }) => {
  return (
    <div className='flex'>
      <Link to={desination} className='bg-sky-800 px-4 py-1 rounded-lg w-fit'>
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  )
}

export default BackButton
