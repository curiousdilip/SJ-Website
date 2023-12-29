import Footer from "../components/Footer";
import Header from "../components/Header";
import "./contact.scss";
export default function Contact() {
  return (
    <>
      <Header />
      <section id="contact">
        <div className="container">
          <div className="heading">
            <h1>Contact</h1>
          </div>
          <div className="form">
            <form action="#">
              <input placeholder="Name" required="" type="name" name="name" />
              <input
                placeholder="Email"
                required=""
                type="email"
                name="email"
              />
              <input
                placeholder="Phone number"
                required=""
                type="tel"
                name="phone"
              />
              <textarea
                name="message"
                rows="3"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" class="">
                <a href="#"> Send Now</a>
              </button>
            </form>
            <div className="details">
              <div class="box">
                <div class="icon">
                  <img src="/phone-icon.svg" alt="Phone Number" />
                </div>
                <div class="number">
                  <h3>Call</h3>
                  <p>+91 88024 82448</p>
                </div>
              </div>
              <div class="box">
                <div class="icon">
                  <img src="/email.svg" alt="Email" />
                </div>
                <div class="mail">
                  <h3>Send Email</h3>
                  <p>subhashjha35@gmail.com</p>
                </div>
              </div>
              <div class="box">
                <div class="icon">
                  <img src="/location.svg" alt="Location" />
                </div>
                <div class="location">
                  <h3>Visit </h3>
                  <p>Dwarka, New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
