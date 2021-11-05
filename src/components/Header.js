import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md bg-white fixed-top py-md-3 px-md-5">
      <div className="container-fluid">
        <span className="navbar-brand text-custom1 fw-bold fs-3 pe-md-3">Bookstore CMS</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <AiOutlineMenu style={{ fontSize: '25px' }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="text-header" activeClassName="active-link" exact>
                BOOKS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categories" className="text-header" activeClassName="active-link" exact>
                CATEGORIES
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
