import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      id="styleHubHero"
      className="carousel slide"
      data-bs-ride="carousel"
    >

      <div className="carousel-indicators">
        <button
          data-bs-target="#styleHubHero"
          data-bs-slide-to="0"
          className="active"
        ></button>

        <button
          data-bs-target="#styleHubHero"
          data-bs-slide-to="1"
        ></button>

        <button
          data-bs-target="#styleHubHero"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div className="carousel-inner">

        <div className="carousel-item active hero-slide hero-one">
          <div className="container">
            <div className="hero-content">

              <p>NEW COLLECTION 2026</p>

              <h1>
                Discover Your
                <br />
                Perfect Style
              </h1>

              <p>
                Explore premium products made for
                your everyday lifestyle.
              </p>

              <Link to="/products" className="btn btn-dark">
                Shop Collection
              </Link>

            </div>
          </div>
        </div>


        <div className="carousel-item hero-slide hero-two">
          <div className="container">
            <div className="hero-content">

              <p>TIMELESS & MODERN</p>

              <h1>
                Elevate Your
                <br />
                Everyday Look
              </h1>

              <p>
                Find products that match your
                unique personality.
              </p>

              <Link to="/products" className="btn btn-dark">
                Explore Now
              </Link>

            </div>
          </div>
        </div>


        <div className="carousel-item hero-slide hero-three">
          <div className="container">
            <div className="hero-content">

              <p>EXCLUSIVE OFFERS</p>

              <h1>
                Shop More.
                <br />
                Save More.
              </h1>

              <p>
                Amazing products at prices
                you'll love.
              </p>

              <Link to="/products" className="btn btn-dark">
                Shop Deals
              </Link>

            </div>
          </div>
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#styleHubHero"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#styleHubHero"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default Hero;