import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EmployeeScreen = () => {
    const {id} = useParams()
    useEffect(()=>{
        const fetchEmployee = async()=>{
            try{
                const {data} = await axios.get(`/api/employee/${id}`)
                console.log(data);
            }catch(e){
                console.log(e);
            }
        }

        fetchEmployee()
    },[])
  return (
    <div>
      Employee {id}
    </div>
  )
}

export default EmployeeScreen
