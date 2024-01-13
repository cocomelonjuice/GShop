import React from 'react'

export default function Dropdown  ()  {
  return (
    <>      <div className="absolute border-solid  border-b-8 border-x-transparent border-x-8 border-t-0 border-gray-400 mt-14 mr-96 "></div>
            <div className="absolute border-2 w-32 mt-16 mr-80  shadow-2xl rounded-lg  ">
                
                <ul className='m-0 hover:bg-blue-400 hover:border-blue-400'>Coffee</ul>
                <ul className='m-0 hover:bg-blue-400 hover:border-blue-400'>Tea</ul>
                <ul className='m-0 hover:bg-blue-400 hover:border-blue-400'>Juice</ul>
                <ul className='m-0 hover:bg-blue-400 hover:border-blue-400'>Ice Cream</ul>
                <ul className='m-0 hover:bg-blue-400 hover:border-blue-400'>Others</ul>
            </div>
    </>
  )
}

