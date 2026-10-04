import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../store/wishlistSlice";
import { addToCart } from "../store/cartSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />

      <section className="wishlist-page py-5">
        <div className="container">

          <div className="section-heading mb-5">
            <p>YOUR FAVORITES</p>
            <h1>My Wishlist</h1>
          </div>

          {wishlist.length === 0 ? (
            <div className="empty-wishlist text-center py-5">

              <i className="bi bi-heart"></i>

              <h3>Your wishlist is empty</h3>

              <p className="text-muted">
                Save your favorite products here.
              </p>

              <Link
                to="/products"
                className="btn btn-dark px-4"
              >
                Explore Products
              </Link>

            </div>
          ) : (
            <div className="row g-4">

              {wishlist.map((product) => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={product.id}
                >

                  <div className="card wishlist-card h-100 border-0 shadow-sm">

                    <img
                      src={product.thumbnail}
                      className="card-img-top"
                      alt={product.title}
                    />

                    <div className="card-body">

                      <small className="text-muted">
                        {product.category}
                      </small>

                      <h5 className="mt-2">
                        {product.title}
                      </h5>

                      <h5 className="fw-bold">
                        ${product.price}
                      </h5>

                      <button
                        className="btn btn-dark w-100 mb-2"
                        onClick={() =>
                          dispatch(addToCart(product))
                        }
                      >
                        <i className="bi bi-bag me-2"></i>
                        Add to Cart
                      </button>

                      <button
                        className="btn btn-outline-danger w-100"
                        onClick={() =>
                          dispatch(
                            removeFromWishlist(product.id)
                          )
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Wishlist;