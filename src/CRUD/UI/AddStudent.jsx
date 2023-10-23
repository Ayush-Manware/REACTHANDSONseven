import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
  const navi = useNavigate()
  return (
    <>
     <div>AddStudent</div>
     <button onClick={()=> navi(-1)} >Back</button>
    </>
  )
}

export default AddStudent