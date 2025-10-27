import React from 'react'
import RightCard from './RightCard'

const ContentRight = (props) => {
  return (
    <div id='right' className='h-full flex flex-nowrap overflow-x-auto gap-10 rounded-4xl p-6  w-3/4 '>
      {props.user.map(function(elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} color={elem.color} tag={elem.tag} intro={elem.intro} />
      })}
    </div>
  )
}

export default ContentRight
