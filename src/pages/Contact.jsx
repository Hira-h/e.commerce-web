import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page py-5">
        <div className="container">

          <div className="section-heading text-center mb-5">
            <p>GET IN TOUCH</p>
            <h1>Contact Us</h1>
          </div>

          <div className="row g-5">

            <div className="col-lg-5">

              <h3>Let's Talk</h3>

              <p className="text-muted">
                Have a question? We'd love to hear from you.
              </p>

              <div className="contact-info">
                <p>
                  <i className="bi bi-envelope"></i>
                  support@stylehub.com
                </p>

                <p>
                  <i className="bi bi-telephone"></i>
                  +92 300 1234567
                </p>

                <p>
                  <i className="bi bi-geo-alt"></i>
                  Karachi, Pakistan
                </p>
              </div>

            </div>

            <div className="col-lg-7">

              <form className="contact-form">

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Your Email"
                />

                <textarea
                  className="form-control mb-3"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>

                <button className="btn btn-dark px-5 py-3">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;