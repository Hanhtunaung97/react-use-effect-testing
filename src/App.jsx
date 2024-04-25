import React, { useEffect, useState } from 'react'
import HideShowComponent from './components/HideShow'
import ListGroup from './components/ListGroup';

const App = () => {
  const[courses,setCourses]=useState([]);
  useEffect(() => {
    fetch('http://localhost:5173/api/courses')
    .then(res=>res.json())
    .then(json=>setCourses(json))
  },[courses])
  return (
    <div className=' m-5 '>
      {/* <HideShowComponent/> */}
      <ListGroup courses={courses} />
    </div>
  )
}

export default App