import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-page py-5">
        <div className="container">

          <div className="about-hero text-center">
            <p>ABOUT STYLEHUB</p>
            <h1>Style Meets Simplicity</h1>
            <p>
              StyleHub is a modern e-commerce platform designed
              for a smooth and enjoyable shopping experience.
            </p>
          </div>

          <div className="row g-4 mt-5">

            <div className="col-md-4">
              <div className="about-box">
                <i className="bi bi-bag-check"></i>
                <h4>Quality Products</h4>
                <p>Carefully selected products for every lifestyle.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-box">
                <i className="bi bi-truck"></i>
                <h4>Fast Delivery</h4>
                <p>Simple and convenient shopping from anywhere.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-box">
                <i className="bi bi-shield-check"></i>
                <h4>Secure Shopping</h4>
                <p>A clean and reliable online shopping experience.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;