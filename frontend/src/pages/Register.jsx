import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../features/auth/authSliceI'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      console.log('pasword doesnt match')
    } else {
      const userData = {
        name,
        email,
        password,
      }
      dispatch(register(userData))
    }
  };

  useEffect(() => {
    if (isError) {
      console.log('error')
    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if(isLoading){
    return <div>Loading ... </div>
  }





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