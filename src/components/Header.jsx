import { Link } from 'react-router-dom';
function Header () {
  return (
    <>
    <header>
    <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">profile</Link>
    <Link to="/myjob">MyJob</Link>
  </nav>
    </header>
  
  </>
  )
}

export default Header