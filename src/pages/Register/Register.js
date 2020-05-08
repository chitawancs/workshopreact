import React, { useState } from 'react'
import { registerUser } from '../../api/api'


export default function Register(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [salary, setSalary] = useState(0)

  const reg = async (e) => {
    e.preventDefault()
    let user = {
      username: username,
      password: password,
      name: name,
      age: age,
      salary: salary
    }
    let result = await registerUser(user)
    console.log(result)

    if (result.status === "sucecss") {
      window.alert("ลงทะเบียนเรียบร้อย")
      props.history.push(`/login`)
    }

  }

  return (
    <div >
      <br></br>
      <div style={{ textAlign: "center" }}>
        <img
          src={process.env.PUBLIC_URL + "assets/images/register.png"}
          width="200"
        ></img>
      </div>
      <form onSubmit={reg}>
        <div class="form-group">
          <h5 style={{ color: 'blue' }}>Username</h5>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" id="username" aria-describedby="emailHelp" />
        </div>
        <div class="form-group">
          <h5 style={{ color: 'blue' }}>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="password" aria-describedby="emailHelp" />
        </div>
        <div class="form-group">
          <h5 style={{ color: 'blue' }}>Confirm password</h5>
          <input type="password" class="form-control" id="cpassword" aria-describedby="emailHelp" />
        </div>
        <div class="form-group">
          <h5 style={{ color: 'blue' }}>Name</h5>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="name" aria-describedby="emailHelp" />
        </div>
        <div class="form-group">
          <h5 style={{ color: 'blue' }}>Age</h5>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} class="form-control" id="age" aria-describedby="emailHelp" />
        </div>
        <div class="form-group">
          <h5 style={{ color: 'blue' }}>Salary</h5>
          <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} class="form-control" id="salary" aria-describedby="emailHelp" />
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="submit" class="btn btn-success">
            Submit
          </button><br></br><br></br>
        </div>

      </form>
    </div>
  )
}
