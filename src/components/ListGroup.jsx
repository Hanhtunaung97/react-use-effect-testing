import React from 'react'
import List from './List'

const ListGroup = ({courses}) => {
  return (
    <div>
        <h1 className=' text-xl font-bold text-center mb-3'>Course List</h1>
        {
            courses.map((course)=><List key={course.id} course={course}/>)
        }

    </div>
  )
}

export default ListGroup