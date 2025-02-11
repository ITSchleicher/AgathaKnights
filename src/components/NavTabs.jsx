import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        {/* Logo/Image */}
        <Link
                to="/"
              >
               <img src="public\mounted-knight.png" alt="dragon" width="50px"></img>
              </Link>
        
        {/* Navbar Toggler (for small screens) with bootstrap */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Tabs */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Character"
                className={currentPage === '/Character' ? 'nav-link active' : 'nav-link'}
              >
                Character
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/Register"
                className={currentPage === '/Register' ? 'nav-link active' : 'nav-link'}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Login"
                className={currentPage === '/Login' ? 'nav-link active' : 'nav-link'}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;