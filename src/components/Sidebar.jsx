import React from 'react'
import {
  MailOutline,
  PhonePortraitOutline,
  CalendarOutline,
  LocationOutline,
  LogoLinkedin,
  LogoGithub,
  LogoTwitter,
} from 'react-ionicons';
import ProfileImage from '../assets/my-avatar1.png'

const Sidebar = () => {

  return (
    <aside className="sidebar" data-sidebar="">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={ProfileImage}
            alt="Richard hanrick"
            width={80}
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Abdur Rehman
          </h1>
          <p className="title">Web developer</p>
        </div>

      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MailOutline color={'#00000'} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:abrehmanfrontenddev@gmail.com" className="contact-link">
                abrehmanfrontenddev@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <PhonePortraitOutline color={'#00000'} />

            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+923065386682" className="contact-link">
                +92 (306) 5386682
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <CalendarOutline color={'#00000'} />

            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1998-05-12">May 12, 1998</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <LocationOutline color={'#00000'} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Lahore, Pakistan</address>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/abdur-rehman-frontendDev" className="social-link">
              <LogoGithub color={'#ffff'} />
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/abdurrehman-frontend-dev/" className="social-link">
              <LogoLinkedin color={'#ffff'} />
            </a>
          </li>
          <li className="social-item">
            <a href="https://x.com/i_abdurrehman" className="social-link">
              <LogoTwitter color={'#ffff'} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};


export default Sidebar;
