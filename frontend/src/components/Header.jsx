import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <p><Link to="/">Goal Setter</Link></p>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </div>
  );
}

export default Header;