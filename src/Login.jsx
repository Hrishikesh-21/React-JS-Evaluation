import React from 'react';
    import{ useState } from "react";
    import {Fetch} from "react-router-dom"
    import "./Login.css"

    const Login = () => {
      const [status, setStatus] = useState("Submit");
      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name,password} = e.target.elements;
        let details = {
          name:'name.value',
          password: 'password.value',
        };
        let response = await fetch("http:/localhost:9000/Login.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify("http:/localhost:9000/Login"),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
      };
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label For="name">UserName:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label For="password">password:</label>
            <input type="password" id="name" required />
          </div>
          <button type="submit">{status}</button>
        </form>
      );
    };
    
    export default Login;


