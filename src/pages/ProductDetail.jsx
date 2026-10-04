import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProductData();
  }, [id]);

  const getProductData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/${id}`
    );

    const data = await response.json();
    setProduct(data);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <Loader />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="product-detail py-5">
        <div className="container">

          <div className="row g-5 align-items-center">

            <div className="col-lg-6">
              <div className="detail-image-box">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
              </div>
            </div>

            <div className="col-lg-6">

              <small className="product-category">
                {product.category}
              </small>

              <h1 className="detail-title">
                {product.title}
              </h1>

              <div className="product-rating mb-3">
                <i className="bi bi-star-fill"></i>
                <span>{product.rating} / 5</span>
              </div>

              <h2 className="detail-price">
                ${product.price}
              </h2>

              <p className="detail-description">
                {product.description}
              </p>

              <div className="detail-stock">
                <i className="bi bi-check-circle"></i>
                In Stock
              </div>

              <div className="quantity-box my-4">

                <button
                  onClick={() =>
                    setQuantity(Math.max(1, quantity - 1))
                  }
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>

              </div>

              <button
                className="btn btn-dark detail-cart-btn"
                onClick={handleAddToCart}
              >
                <i className="bi bi-bag me-2"></i>
                Add to Cart
              </button>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetail;