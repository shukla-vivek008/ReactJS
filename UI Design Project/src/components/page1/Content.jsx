import React from 'react'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight.jsx'

const Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex items-center justify-between h-[90vh] px-18 gap-20'>
      <ContentLeft />
      <ContentRight user={props.user}/>
    </div>
  )
}

export default Content
