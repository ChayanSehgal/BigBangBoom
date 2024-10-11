// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const res = await fetch('http://localhost:5000/api/auth/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password }),
//         });

//         if (res.ok) {
//             const data = await res.json();
//             localStorage.setItem('token', data.token);
//             localStorage.setItem('user', JSON.stringify(data.user));
//             alert('Login successful!');
//             navigate('/dashboard');
//         } else {
//             const errorText = await res.text();
//             console.error('Login error response:', errorText);
//             alert('Login error: ' + errorText);
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2 className="welcome-title">Welcome to Big Bang Boom</h2>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 <button type="submit">Login</button>
//                 <Link to="/register" className="link">Register as new user</Link>
//             </form>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      const errorText = await res.text();
      console.error("Login error response:", errorText);
      alert("Login error: " + errorText);
    }
  };

  return (
    <div className="login-container">
      <h2 className="welcome-title">Welcome to Big Bang Boom</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <Link to="/register" className="link">
          Register as new user
        </Link>
      </form>
    </div>
  );
};

export default Login;
