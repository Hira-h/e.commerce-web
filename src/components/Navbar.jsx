import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-3" to="/">
          Style<span>Hub</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#styleHubNavbar"
          aria-controls="styleHubNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="styleHubNavbar"
        >

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Shop
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>

          <div className="navbar-actions">

            <Link to="/wishlist" className="nav-icon">
              <i className="bi bi-heart"></i>
              <span>{wishlist.length}</span>
            </Link>

            <Link to="/cart" className="nav-icon">
              <i className="bi bi-bag"></i>
              <span>{cartCount}</span>
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;