import React,{ useState } from "react";
import "./Login.css";
import {login} from "../../api/api"
import Token from '../../helper/PrivateRoute'

export default function Login(props) {
  localStorage.clear();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  

  const nLogin = async (e) => {
    e.preventDefault()
    let user = {
      username: username,
      password: password,
    }
    let result = await login(user)
    console.log(result)
  
    if (result.status === "success") {
      localStorage.setItem('MyUser',result.data._id)
      props.history.push(`/profile/${result.data._id}`)
      
    }
  }
  return (
    <div >
        <br></br>
      <div style={{ textAlign: "center" }}>
        <img
          src={process.env.PUBLIC_URL + "assets/images/login.png"}
          width="200"
        ></img>
      </div>
      <form onSubmit ={nLogin}> 
        <div className="form-group">
        <h5 style = {{color : 'blue'}}>Username</h5>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" id="username" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
        <h5 style = {{color : 'blue'}}>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="password" aria-describedby="emailHelp"/>
        </div>
        <div style={{ textAlign: "center" }}>
        <button type="submit" class="btn btn-primary">
          Login
        </button><br></br><br></br>
        <button type="button" class="btn btn-primary">
            Register
        </button><br></br><br></br>
      </div>
        
      </form>
    </div>
  );
}
