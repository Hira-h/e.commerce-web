import { useEffect, useState } from "react";
import { getProducts, getCategories } from "../config/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import CategoryCard from "../components/CategoryCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
    getCategories().then(setCategories);
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      {/* CATEGORIES */}

      <section className="py-5">
        <div className="container">

          <div className="section-heading text-center mb-5">
            <p>SHOP BY CATEGORY</p>
            <h2>Explore Categories</h2>
          </div>

          <div className="row g-4">
            {categories.slice(0, 4).map((category) => (
              <div className="col-6 col-lg-3" key={category.slug}>
                <CategoryCard
                  name={category.name}
                  image={`https://cdn.dummyjson.com/product-images/${category.slug}/thumbnail.webp`}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PRODUCTS */}

      <section className="py-5 bg-light">
        <div className="container">

          <div className="section-heading text-center mb-5">
            <p>OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>

          {products.length === 0 ? (
            <Loader />
          ) : (
            <div className="row g-4">
              {products.slice(0, 8).map((product) => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={product.id}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <p>STYLEHUB</p>
          <h2>Everything You Love, In One Place</h2>
          <p className="text-muted mt-3">
            Discover quality products and shop your favorite styles.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;