import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'

export default function ProfileViewFrom(props) {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(0)

    useEffect(() => {
      
          setName(props.user.name)
          setAge(props.user.age)
          setSalary(props.user.salary)
        
    })
    

    return (    
       
        <div>
         <h3>Name : {name}</h3>
         <h3>Age : {age}</h3>
         <h3>Salary : {salary}</h3>
         to={`/edit/${props.user._id}`}
         <button type="button" class="btn btn-primary">
            Edit Profile
        </button>
        </div>
    )
}
