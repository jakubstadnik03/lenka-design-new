import React from 'react';

const Contact = () => {
  return (
    <div className="rts-contact-area rts-section-gap" id="contact">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-5 col-md-6 col-12">
            <div className="title-left-wrapper rts-marign-200 rts-marign-0-xs">
              <span className="pre">Contact Us</span>
              <h2 className="title">Get in Touch</h2>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-12">
            <div className="title-right-wrapper mb--80">
              <p className="disc">
                Have a question or need a consultation? Contact us today and let's discuss your project. We're here to assist you every step of the way.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt--40">
          <div className="col-lg-6 col-12">
            <div className="contact-form-wrapper">
              <form action="#" className="rts-contact-form">
                <div className="single-form">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="single-form">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="single-form">
                  <textarea placeholder="Your Message"></textarea>
                </div>
                <div className="rts-btn-wrapper">
                  <button type="submit" className="rts-btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt_md--30 mt_sm--30">
            <div className="contact-info-wrapper">
              <div className="single-contact-info">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="content">
                  <p>Phone Number</p>
                  <h6>(123) 456-7890</h6>
                </div>
              </div>
              <div className="single-contact-info">
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="content">
                  <p>Email Address</p>
                  <h6>info@archstudio.com</h6>
                </div>
              </div>
              <div className="single-contact-info">
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="content">
                  <p>Office Address</p>
                  <h6>123 Architecture Street, City, Country</h6>
                </div>
              </div>
              <div className="social-links">
              <ul className="social-style-two-wrapper social-anim">
                <li style={{padding: "7px"}}><a className="counter__anim" href="https://www.facebook.com/lenkadesign.cz"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li style={{padding: "7px"}}><a className="counter__anim" href="https://www.instagram.com/designlenka/?hl=cs"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li style={{padding: "7px"}}><a className="counter__anim" href="https://cz.linkedin.com/in/lenka-stádn%C3%ADková"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
             </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
