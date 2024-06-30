import React from 'react'
import {
  MailOutline,
  PhonePortraitOutline,
  CalendarOutline,
  LocationOutline,
  LogoFacebook,
  LogoInstagram,
  LogoTwitter
} from 'react-ionicons';
import ProfileImage from '../assets/my-avatar.png'

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
            Richard hanrick
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
              <a href="mailto:richard@example.com" className="contact-link">
                richard@example.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <PhonePortraitOutline color={'#00000'} />

            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">
                +1 (213) 352-2795
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <CalendarOutline color={'#00000'} />

            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">June 23, 1982</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <LocationOutline color={'#00000'} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <LogoFacebook color={'#ffff'} />

            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <LogoTwitter color={'#ffff'} />

            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <LogoInstagram color={'#ffff'} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};


export default Sidebar;
