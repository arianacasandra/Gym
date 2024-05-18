import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
 

function Login() { 
  // preia datele din form si le salveaza
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8888/api/user", inputs)
    .then((Response)=> {
        if(Response.data.status === 'true')
          {  
            navigate('/');
          }
          else{
                alert('Invalid Admin');
            }
            
        

    });
    // sa vad daca preia datele din form
    console.log(inputs);
  }

  return (
    <div className="design">
      <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder=" " autoComplete="off" className="form-control-material" required onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder=" " autoComplete="off" className="form-control-material" required onChange={handleChange} />
          <div className="multiple-choice-login">
            <button className="button-login" type="submit">Log In</button>
            <a href='./Register.js'>Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
