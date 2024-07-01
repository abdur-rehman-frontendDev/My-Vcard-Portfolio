import React from 'react';
import IconDesign from '../assets/icon-design.svg'
import IconDev from '../assets/icon-dev.svg'
import IconApp from '../assets/icon-app.svg'
import IconPhoto from '../assets/icon-photo.svg'
import Avatar1 from '../assets/avatar-1.png'
import Avatar2 from '../assets/avatar-2.png'
import Avatar3 from '../assets/avatar-3.png'
import Avatar4 from '../assets/avatar-4.png'
import IconQuote from '../assets/icon-quote.svg'
import Logo1 from '../assets/logo-1-color.png'
import Logo2 from '../assets/logo-2-color.png'
import Logo3 from '../assets/logo-3-color.png'
import Logo4 from '../assets/logo-4-color.png'
import Logo5 from '../assets/logo-5-color.png'
import Logo6 from '../assets/logo-6-color.png'

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          I am a skilled Front End Developer with extensive industry experience
          in building websites and web applications. My expertise spans across HTML,
          CSS, Bootstrap, JavaScript, and React, and I have also gained professional
          experience working with Vue, Next.js, and Nuxt.js.

        </p>
        <p>
          As an experienced JavaScript Developer, I have a proven track record in the
          information technology and services industry. My skill set includes strong
          communication, strategic planning, training, and proficiency in English.
          I hold a Bachelor of Science degree in Computer Science from the University
          Of Central Punjab, which has equipped me with a solid foundation in
          engineering and web development.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={IconDesign}
                alt="design icon"
                width={40}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={IconDev}
                alt="Web development icon"
                width={40}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={IconApp}
                alt="mobile app icon"
                width={40}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>
              <p className="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={IconPhoto}
                alt="camera icon"
                width={40}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>
              <p className="service-item-text">
                I make high-quality photos of any category at a professional
                level.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item="">
              <figure className="testimonials-avatar-box">
                <img
                  src={Avatar1}
                  alt="Daniel lewis"
                  width={60}
                  data-testimonials-avatar=""
                />
              </figure>
              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title=""
              >
                Daniel lewis
              </h4>
              <div className="testimonials-text" data-testimonials-text="">
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>
          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item="">
              <figure className="testimonials-avatar-box">
                <img
                  src={Avatar2}
                  alt="Jessica miller"
                  width={60}
                  data-testimonials-avatar=""
                />
              </figure>
              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title=""
              >
                Jessica miller
              </h4>
              <div className="testimonials-text" data-testimonials-text="">
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>
          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item="">
              <figure className="testimonials-avatar-box">
                <img
                  src={Avatar3}
                  alt="Emily evans"
                  width={60}
                  data-testimonials-avatar=""
                />
              </figure>
              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title=""
              >
                Emily evans
              </h4>
              <div className="testimonials-text" data-testimonials-text="">
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>
          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item="">
              <figure className="testimonials-avatar-box">
                <img
                  src={Avatar4}
                  alt="Henry william"
                  width={60}
                  data-testimonials-avatar=""
                />
              </figure>
              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title=""
              >
                Henry william
              </h4>
              <div className="testimonials-text" data-testimonials-text="">
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <div className="modal-container" data-modal-container="">
        <div className="overlay" data-overlay="" />
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn="">
            <ion-icon
              name="close-outline"
              role="img"
              className="md hydrated"
              aria-label="close outline"
            />
          </button>
          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img
                src={Avatar1}
                alt="Daniel lewis"
                width={80}
                data-modal-img=""
              />
            </figure>
            <img src={IconQuote} alt="quote icon" />
          </div>
          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title="">
              Daniel lewis
            </h4>
            <time dateTime="2021-06-14">14 June, 2021</time>
            <div data-modal-text="">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src={Logo1} alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo2} alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo3} alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo4} alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo5} alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo6} alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  )
};

export default About;
