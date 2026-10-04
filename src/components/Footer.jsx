import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5">

        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <h3>
              Style<span>Hub</span>
            </h3>

            <p>
              Your destination for modern products,
              effortless shopping and timeless style.
            </p>

            <div className="footer-socials">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5>Shop</h5>

            <Link to="/products">All Products</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">Cart</Link>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Company</h5>

            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Home</Link>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Customer Care</h5>

            <p>Fast & Secure Delivery</p>
            <p>Easy Returns</p>
            <p>24/7 Customer Support</p>
          </div>

        </div>

        <hr />

        <div className="footer-bottom">
          <p>© 2026 StyleHub. All Rights Reserved.</p>

          <div>
            <i className="bi bi-credit-card me-2"></i>
            <i className="bi bi-paypal"></i>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;