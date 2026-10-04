import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <section className="cart-page py-5">
        <div className="container">

          <div className="section-heading mb-5">
            <p>YOUR SHOPPING BAG</p>
            <h1>Shopping Cart</h1>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart text-center py-5">
              <i className="bi bi-bag-x"></i>
              <h3>Your cart is empty</h3>
              <p className="text-muted">
                Add some products to your shopping bag.
              </p>

              <Link to="/products" className="btn btn-dark px-4">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="row g-4">

              <div className="col-lg-8">

                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                    />

                    <div className="cart-info">
                      <small>{item.category}</small>
                      <h5>{item.title}</h5>
                      <strong>${item.price}</strong>

                      <div className="quantity-box mt-3">
                        <button
                          onClick={() =>
                            dispatch(decreaseQuantity(item.id))
                          }
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            dispatch(increaseQuantity(item.id))
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                    >
                      <i className="bi bi-trash"></i>
                    </button>

                  </div>
                ))}

              </div>

              <div className="col-lg-4">
                <div className="cart-summary">

                  <h4>Order Summary</h4>

                  <div className="summary-row">
                    <span>Subtotal</span>
                    <strong>${total.toFixed(2)}</strong>
                  </div>

                  <div className="summary-row">
                    <span>Shipping</span>
                    <strong>Free</strong>
                  </div>

                  <hr />

                  <div className="summary-row total-row">
                    <span>Total</span>
                    <strong>${total.toFixed(2)}</strong>
                  </div>

                  <button className="btn btn-dark w-100 mt-4 py-3">
                    Proceed to Checkout
                  </button>

                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Cart;