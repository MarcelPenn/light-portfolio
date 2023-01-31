import React from 'react';
import "./about.css";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">Introduction</span>

        <div className="about__container container grid">
            <div className="about__data">
                <Info />

                <p className="about__description">Frontend developer with a focus
                    on UI / UX experience, using the most up to date tools to produce clean, creative,
                    and responsive web applications to meet any and all specifications and requirements.
                </p>

                <a href="#portfolio" className="button button--flex">Portfolio
                </a>
            </div>
        </div>
    </section>
  )
}

export default About