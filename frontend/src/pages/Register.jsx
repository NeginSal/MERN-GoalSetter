import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
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

  const { name, email, password, password2 } = formData
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name='name'
        placeholder="Enter your name"
        value={name}
        onChange={onChange}
      />
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
      <input
        type="password"
        name='password2'
        placeholder="Confirm your password"
        value={password2}
        onChange={onChange}
      />
      <button>Register</button>

    </form>
  );
}

export default Register;