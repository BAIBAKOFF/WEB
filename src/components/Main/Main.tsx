import image from 'assets/222.png';
import github from 'assets/github.png';
import insta from 'assets/insta.png';
import linkedin from 'assets/linkedin.png';
import myPhoto from 'assets/myPhoto2.jpg';
import { Button } from 'shared/Button/Button';
import { Wrapper } from '../Wrapper/Wrapper';
import { MainHeader } from './MainHeader';
import './main.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { MainExperience } from './MainExperience';
import { MainProjects } from './MainProjects';
import {MainContact} from "./MainContact";
import {useRef} from "react";

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 200, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom',
});

export const Main = () => {

    const myBlockRef = useRef<HTMLDivElement>(null);

    const scrollToBlock = () => {
      if (myBlockRef.current) {
        myBlockRef.current.scrollIntoView({behavior: 'smooth'});
      }
    };

  return (
    <>
      <Wrapper>
        <MainHeader scrollToBlock={scrollToBlock}/>
        <div className="main-content">
          <div data-aos="fade-right"
               data-aos-offset="300"
               data-aos-easing="ease-in-sine" className="main-title">
            <p>
              <span>Hello!</span> <br />
              My name is <span>SERGEI BAIBAKOV</span> <br />
              and I'm a <span>FRONTEND DEVELOPER</span>
            </p>
            <p>
              I'm <span>25</span> years old. I live in the city of
              Tallinn. <br />I am actively involved in web
              development.
            </p>
            <div className="main-buttons">
              <Button
                text="LINKEDIN"
                href="https://www.linkedin.com/in/sergei-baibakov-5b8b44265/"
              />
              <Button
                text="INSTAGRAM"
                href="https://www.instagram.com/baibak_off/"
              />
              <Button
                text="COVER LETTER"
                href="https://docs.google.com/document/d/1-cMekfsHIScO63iiTenYY_Vl8kauXSfY/edit?usp=sharing&ouid=112695968274081903326&rtpof=true&sd=true"
              />
              <Button
                text="CV"
                href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/sergei-baibakov+/be3b4cc5-8521-4d1f-a117-c343745b5ede?view=html"
              />
            </div>
          </div>
          <div data-aos="fade-left"
               data-aos-anchor="#example-anchor"
               data-aos-offset="500"
               data-aos-duration="500" className="main-img">
            <img src={image} alt="/" />
          </div>
        </div>
      </Wrapper>
      <div className="aboutMe">
        <Wrapper>
          <div data-aos="fade-up"
               data-aos-duration="1000" className="aboutMe-content">
            <img src={myPhoto} alt="/" />
            <div>
              <h1>
                About <span>Me!</span>
              </h1>
              <h3>Frontend Developer!</h3>
              <p>
                I am a Frontend developer experienced in{' '}
                <span>
                  HTML, CSS, JavaScript, React, Node.js, and GraphQL
                </span>
                .
                <br />I work at Vespia, a company specializing in
                Anti-Money Laundering (AML) checks. Alongside my
                primary role, I am actively involved in developing an
                administrative panel for the gaming community Squad.
                This project involves collaboration with a backend
                developer to facilitate player interaction on gaming
                servers, aiming to create an intuitive and functional
                interface. Additionally, I have directly interacted
                with databases using <span>MySQL</span> and
                <span>GraphQL</span>.
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
      <MainProjects />
      <MainExperience />
      <MainContact ref={myBlockRef}/>
      <Wrapper>
        <footer className="footer">
          <p>2024 By Sergei Baibakov</p>
          <div className="footer-links">
            <a href="/">
              <img src={linkedin} width={50} alt="" />
            </a>
            <a href="/">
              <img src={github} width={50} alt="" />
            </a>
            <a href="/">
              <img src={insta} width={50} alt="" />
            </a>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};
