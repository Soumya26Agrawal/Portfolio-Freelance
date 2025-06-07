import React, { useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import AOS from "aos";
function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // animation duration: 1s
  }, []);
  const form = useRef();
  const contactMe = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jppt3fj", "template_hel5pdb", form.current, {
        publicKey: "iV0YrDSsG4mvEY_1S",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <main className="main">
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Near Ardee City Mall, Gurgaon</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+91-9660070886</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Me</h3>
                    <p>agrawalshik7@gmail.com</p>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.146077393856!2d77.07820237494985!3d28.44501259257255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18be1485fd9b%3A0xadfc99d2b06147c2!2sArdee%20Mall!5e0!3m2!1sen!2sin!4v1749292889786!5m2!1sen!2sin"
                  frameborder="0"
                  style={{ border: "0", width: "100%", height: "270px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-7">
              <form
                ref={form}
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
                onSubmit={contactMe}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label for="name-field" className="pb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name-field"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="email-field" className="pb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email-field"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="subject-field" className="pb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject-field"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="message-field" className="pb-2">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      id="message-field"
                      required=""
                    ></textarea>
                  </div>
                  {/* 
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div> */}

                  <button type="submit">Send Message</button>
                  {/* </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
