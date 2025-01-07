// eslint-disable-next-line react/prop-types
function Card({ heading, list }) {
  return (
    <div className='w-1/2 flex flex-col items-center justify-center lg:w-1/4'>
      <div className='w-full h-[250px] flex flex-col items-center justify-center space-y-2'>
        <div className="w-11/12 flex items-center justify-start">
          <h3 className="text-lg font-medium text-white">{heading}</h3>
        </div>
        <div className="w-11/12 h-[190px] flex flex-col items-start justify-start">
          {list}
        </div>
      </div>
    </div>
  )
}

export default Card
