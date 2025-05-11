import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">MERN Auth</Link>
        <div className="flex space-x-4">
          {token ? (
            <>
              <span className="text-white">Welcome, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="text-white hover:text-gray-200">Signup</Link>
              <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
