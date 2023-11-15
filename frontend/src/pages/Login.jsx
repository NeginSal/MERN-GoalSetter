import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))

  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const { email, password } = formData
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name='email'
        placeholder="Enter your email"
        value={email}
        onChange={onChange}
      />
      <input
        type="password"
        name='password'
        placeholder="Enter your password"
        value={password}
        onChange={onChange}
      />
      <button>Login</button>

    </form>
  );
}

export default Login;