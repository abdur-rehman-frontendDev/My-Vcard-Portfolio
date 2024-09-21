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
import Logo1 from '../assets/clients/logo-1-color.png'
import Logo2 from '../assets/clients/logo-2-color.png'
import Logo3 from '../assets/clients/logo-3-color.png'
import Logo4 from '../assets/clients/logo-4-color.png'
import Logo5 from '../assets/clients/logo-5-color.png'
import Logo6 from '../assets/clients/logo-6-color.png'
import Logo7 from '../assets/clients/logo-7-color.png'
import Logo8 from '../assets/clients/logo-8-color.png'

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          With over 3 years of expertise in Frontend Development, I am driven by a passion
          for creating seamless and engaging user experiences. I specialize in JavaScript,
          with a strong focus on React.js and Next.js, enabling me to transform intricate
          designs into responsive, high-performing websites that captivate audiences across
          various devices.
        </p>
        <p>My experience includes working on diverse projects, from e-commerce platforms to
          admin portals, where I implement state-of-the-art state management solutions such
          as Redux and Context API. I thrive in collaborative environments, working closely with
          designers and backend developers to deliver exceptional products that meet the
          highest standards of web design and accessibility.
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

      {/* <section className="testimonials">
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
      </div> */}

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="https://lettolino.vercel.app/" target='_blank'>
              <img src={Logo1} alt="lettolino logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="https://yallabid.com/" target='_blank'>
              <img src={Logo2} alt="yallabid logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="https://uniorx.com/" target='_blank'>
              <img src={Logo3} alt="uniorx logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="https://dashboard.genensys.com/" target='_blank'>
              <img src={Logo4} alt="transcure logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="https://mountain.com/" target='_blank'>
              <img src={Logo5} alt="mountain logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="https://webevis.com/" target='_blank'>
              <img src={Logo6} alt="webevis logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="https://mettlesol.com/" target='_blank'>
              <img src={Logo7} alt="mettlesol logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="https://getdirectholidays.co.uk/api/admin" target='_blank'>
              <img src={Logo8} alt="getdirectholidays logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  )
};

export default About;
