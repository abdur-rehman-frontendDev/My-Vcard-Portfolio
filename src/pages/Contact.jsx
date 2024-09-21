import React from 'react';

const Contact = () => {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox" data-mapbox="">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217705.76816733953!2d74.17294658608226!3d31.50623070538515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1726901556801!5m2!1sen!2s"
            width={400}
            height={300}
            loading="lazy"
          />
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form" data-form="">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required=""
              data-form-input=""
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required=""
              data-form-input=""
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required=""
            data-form-input=""
            defaultValue={""}
          />
          <button
            className="form-btn"
            type="submit"
            disabled=""
            data-form-btn=""
          >
            <ion-icon
              name="paper-plane"
              role="img"
              className="md hydrated"
              aria-label="paper plane"
            />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
};

export default Contact;
