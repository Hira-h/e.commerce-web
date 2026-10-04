import { useEffect, useState } from "react";
import { getProducts } from "../config/api";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  let filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || product.category === category;

    return matchSearch && matchCategory;
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Navbar />

      <section className="products-page py-5">
        <div className="container">

          <div className="section-heading text-center mb-5">
            <p>STYLEHUB STORE</p>
            <h1>All Products</h1>
          </div>

          <div className="row g-3 mb-5">

            <div className="col-lg-5">
              <input
                type="text"
                className="form-control search-box"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-lg-4">
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item === "all" ? "All Categories" : item}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-lg-3">
              <select
                className="form-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="default">Sort By</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>

          </div>

          {products.length === 0 ? (
            <Loader />
          ) : (
            <div className="row g-4">

              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    className="col-6 col-md-4 col-lg-3"
                    key={product.id}
                  >
                    <ProductCard product={product} />
                  </div>
                ))
              ) : (
                <div className="text-center py-5">
                  <h4>No products found.</h4>
                </div>
              )}

            </div>
          )}

        </div>
      </section>
    </>
  );
}

export default Products;