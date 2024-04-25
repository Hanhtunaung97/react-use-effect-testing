import React from 'react'

const List = ({course:{id,title,fee,status,student_count}}) => {
  return (
    <div className='flex gap-3 p-3 border border-gray-200 mb-3'>
        <p>{title} ({fee})</p>
    </div>
  )
}

export default List