import RightCArdContent from './RightCardContent.jsx'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden shrink-0 relative rounded-4xl'>
    <img className='h-full w-full object-cover' src={props.img}alt="" />
    <RightCArdContent color={props.color} tag={props.tag} id={props.id} />
    </div>
  )
}

export default RightCard
