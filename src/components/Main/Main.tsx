import image from '../../assets/222.png';
import github from 'assets/github.png';
import insta from 'assets/insta.png';
import linkedin from 'assets/linkedin.png';
import { Button } from 'shared/Button/Button';
import { Wrapper } from '../Wrapper/Wrapper';
import { MainHeader } from './MainHeader';
import './main.css';

import 'aos/dist/aos.css';
import { MainContact } from './MainContact';
import { MainExperience } from './MainExperience';
import { MainProjects } from './MainProjects';

import AOS from 'aos';
import React, { useRef, useState } from 'react';
import { Discord } from '../Discord';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { AboutMe } from './AboutMe';
import { Aos } from './AosSettings';
AOS.init(Aos);

export const Main = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const executeScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {isModalOpen && (
        <ModalWindow>
          <Discord closeModal={closeModal} />
        </ModalWindow>
      )}
      <Wrapper>
        <MainHeader
          main={() => executeScroll(mainRef)}
          aboutMe={() => executeScroll(aboutMeRef)}
          projectsRef={() => executeScroll(projectsRef)}
          contactRef={() => executeScroll(contactRef)}
        />
        <div ref={mainRef} className="main-content">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="main-title"
          >
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
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="main-img"
          >
            <img src={image} alt="/" />
          </div>
        </div>
      </Wrapper>
      <AboutMe aboutMeRef={aboutMeRef} />
      <MainProjects
        projectsRef={projectsRef}
        setIsModalOpen={openModal}
      />
      <MainExperience />
      <MainContact contactRef={contactRef} />
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
