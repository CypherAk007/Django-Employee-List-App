import React from 'react'
import { useParams } from 'react-router-dom'

const EmployeeScreen = () => {
    const {id} = useParams()
  return (
    <div>
      Employee {id}
    </div>
  )
}

export default EmployeeScreen
