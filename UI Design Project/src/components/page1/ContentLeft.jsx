import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText.jsx'
import Arrow from './Arrow.jsx'

const ContentLeft = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
      <HeroText />
      <Arrow/>
    </div>
  )
}

export default ContentLeft
