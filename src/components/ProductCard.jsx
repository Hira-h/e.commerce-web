import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { addToWishlist } from "../store/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card product-card h-100 border-0 shadow-sm">

      <div className="product-image">

        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <span className="discount-badge">
          -{Math.round(product.discountPercentage)}%
        </span>

        <button
          className="wishlist-btn"
          onClick={() => dispatch(addToWishlist(product))}
        >
          <i className="bi bi-heart"></i>
        </button>

      </div>

      <div className="card-body d-flex flex-column">

        <small className="product-category">
          {product.category}
        </small>

        <h5 className="card-title mt-2">
          {product.title}
        </h5>

        <div className="product-rating">
          <i className="bi bi-star-fill"></i>
          <span>{product.rating}</span>
        </div>

        <div className="mt-auto">

          <div className="product-price">
            ${product.price}
          </div>

          <div className="d-flex gap-2 mt-3">

            <Link
              to={`/products/${product.id}`}
              className="btn btn-outline-dark w-50"
            >
              View
            </Link>

            <button
              className="btn btn-dark w-50"
              onClick={() => dispatch(addToCart(product))}
            >
              Add Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;