import React from 'react'

const Feed = () => {
  return (
    <div className='add-resume-section flex flex-col m-10' >
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div className='p-3'>
      <button className="btn btn-outline">Add Resume</button>
      </div>
    </div>
    
  )
}

export default Feed