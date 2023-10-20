import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Student = () => {
  const studData = useSelector((state) => state.student)
  return (
    <>
     <h1>Student Details</h1>
     <table className="table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Batch</th>
          <th>Course</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {studData.map((item,index) =>{
          return(
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.batch}</td>
              <td>{item.course}</td>
              <td><Link to={`/editStudent/${index}`} >Edit</Link></td>
            </tr>
          )
        })}
      </tbody>
     </table>
    </>
  )
}

export default Student