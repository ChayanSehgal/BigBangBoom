import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageURL, setImageURL] = useState(""); // Image as a URL string
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const minLength = 7;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 7 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    } else {
      setError(""); // Reset error if password is valid
    }

    // Send the data as JSON to the backend
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, photo: imageURL }), // Send the image URL
    });

    if (res.ok) {
      alert("Registration successful!");
      navigate("/login");
    } else {
      const errorText = await res.text();
      console.error("Registration error response:", errorText);
      alert("Registration error: " + errorText);
    }
  };

  return (
    <div className="register-container">
      <h2 className="welcome-title">Welcome to Big Bang Boom</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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

        {/* Input field for image URL */}
        <input
          type="url"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}
        <button type="submit">Register</button>
        <Link to="/login" className="link">
          Already have an account? Login here
        </Link>
      </form>
    </div>
  );
};

export default Register;
