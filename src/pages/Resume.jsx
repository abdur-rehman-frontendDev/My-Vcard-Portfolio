import React from 'react';
import {
  BookOutline
} from 'react-ionicons';

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOutline color={'#00000'} className="md hydrated" />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              University of Central Punjab
            </h4>
            <span>2016 — 2020</span>
            <p className="timeline-text">
              Completed a Bachelor of Science degree in Computer Science.
              Gained comprehensive knowledge and skills in software development,
              web technologies, database management, and computer networks.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Punjab Group of Colleges</h4>
            <span>2014 — 2015</span>
            <p className="timeline-text">
              Completed FSC Pre-Engineering. Developed a strong foundation in physics,
              chemistry, and mathematics, which prepared me for further studies in
              computer science.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Private High school
            </h4>
            <span>2012 — 2013</span>
            <p className="timeline-text">
              Completed Matriculation in Science. Acquired fundamental knowledge
              in subjects like mathematics, physics, chemistry, and biology.
            </p>
          </li>
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOutline color={'#00000'} className="md hydrated" />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frontend Developer</h4>
            <span>Punjab Information Technology Board (PITB) · Freelance <br />
              Jun 2024 — Present</span>
            <p className="timeline-text">
              Currently working on an e-commerce website focused on selling handmade bedsheets.
              Utilizing React.js to create a seamless and engaging shopping experience.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frontend Developer</h4>
            <span>Getdirect Holidays  · Part-time <br /> Jun 2024 — Present</span>
            <p className="timeline-text">
              Working on GetDirect Holidays, an admin portal created using React.js and
              Redux Toolkit. This project involves building interface that
              allows administrators to efficiently manage various aspects of the platform.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Senior ReactJs Developer</h4>
            <span>Webevis Technologies · Full-time <br /> Jan 2023 — Jun 2024 </span>
            <p className="timeline-text">
              Developed responsive web applications using React.js, ensuring optimal
              performance and compatibility across various browsers and devices.
              Implemented state management solutions such as Redux and Context API
              to maintain application state and enhance user interactivity
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">ReactJs Developer</h4>
            <span>Transcure · Full-time <br />
              Jul 2022 — Dec 2022</span>
            <p className="timeline-text">
              Led front-end development efforts for e-commerce platform,
              optimising performance and enhancing user experience through ReactJS
              components and dynamic data rendering.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frontend Developer</h4>
            <span>MettleSol · Full-time <br /> Jan 2021 — Jun 2022 </span>
            <p className="timeline-text">
              Employed component-based architecture in ReactJS projects,
              enhancing code re-usability and facilitating easier maintenance and updates.
            </p>
          </li>
        </ol>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web Development</h5>
              <data value={90}>90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }} />
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Mobile Development</h5>
              <data value={60}>60%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "60%" }} />
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Digital Marketing</h5>
              <data value={98}>98%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "98%" }} />
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Customer Support</h5>
              <data value={95}>95%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "95%" }} />
            </div>
          </li>
        </ul>
      </section>
    </article>
  )
};

export default Resume;
