import myPhoto from '../../assets/myPhoto2.jpg';
import { Wrapper } from '../Wrapper/Wrapper';
import React from "react";

type Props = {
  aboutMeRef: React.RefObject<HTMLDivElement>
}

export const AboutMe = ({aboutMeRef}: Props) => {
  return (
    <div ref={aboutMeRef} className="aboutMe">
      <Wrapper>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="aboutMe-content"
        >
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
              Anti-Money Laundering (AML) checks. Alongside my primary
              role, I am actively involved in developing an
              administrative panel for the gaming community Squad.
              This project involves collaboration with a backend
              developer to facilitate player interaction on gaming
              servers, aiming to create an intuitive and functional
              interface. Additionally, I have directly interacted with
              databases using <span>MySQL</span> and
              <span>GraphQL</span>.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
