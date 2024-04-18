import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='flex justify-center mt-16'>
      <Image className='h-52'  src="spinner.svg" alt='loading...' />
    </div>
  )
}

export default loading