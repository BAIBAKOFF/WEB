import React from 'react';
import adminPanel from '../../assets/adminPanel.png';
import game3 from 'assets/games/application_cardio.jpg';
import game2 from 'assets/games/discordBot.jpeg';
import game4 from '../../assets/games/game_number.png';
import game1 from '../../assets/games/game_svin.png';
import game5 from '../../assets/games/react_application.jpg';
import game6 from '../../assets/games/tree.png';
import game7 from '../../assets/games/webBank.png';
import game8 from '../../assets/games/website.png';
import { Button } from '../../shared/Button/Button';
import { Wrapper } from '../Wrapper/Wrapper';

type Props = {
  projectsRef: React.RefObject<HTMLDivElement>;
  setIsModalOpen: () => void;
};

export const MainProjects = ({
  projectsRef,
  setIsModalOpen,
}: Props) => {
  return (
    <Wrapper>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="projects"
        ref={projectsRef}
      >
        <h1>
          My <span>projects</span>
        </h1>
        <div className="projects-content">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="project"
          >
            <img src={game1} alt="" />
            <div className="test">
              <h1>GAME PINK</h1>
              <p>Need to dial number 21 fastest then you friend</p>
              <div className="project__buttons">
                <Button
                  href="https://github.com/BAIBAKOFF/gamePink"
                  text="GITHUB"
                />
                <Button
                  href="https://baibakoff.github.io/gamePink/"
                  text="VIEW"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="project"
          >
            <img src={game2} alt="" />
            <div className="test">
              <h1>DISCORD BOT</h1>
              <p>Bot for user interaction</p>
              <div className="project__buttons">
                <Button onClick={setIsModalOpen} text="VIEW" />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="project"
          >
            <img src={game3} alt="" />
            <div className="test">
              <h1>Cardio application</h1>
              <p>Application for recording workouts</p>
              <div className="project__buttons">
                <Button
                  href="https://github.com/BAIBAKOFF/Cardio"
                  text="GITHUB"
                />
                <Button
                  href="https://baibakoff.github.io/Cardio/"
                  text="VIEW"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="project"
          >
            <img src={game4} alt="" />
            <div className="test">
              <h1>Guess the number</h1>
              <p>Need to dial number and try to guess it</p>
              <div className="project__buttons">
                <Button
                  href="https://github.com/BAIBAKOFF/GuessTheNumber"
                  text="GITHUB"
                />
                <Button
                  href="https://baibakoff.github.io/GuessTheNumber/"
                  text="VIEW"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="project"
          >
            <img src={game6} alt="" />
            <div className="test">
              <h1>React D3 Tree </h1>
              <p>Сompany tree according to JSON data</p>
              <div className="project__buttons">
                <Button
                  href="https://github.com/BAIBAKOFF/ReactTree"
                  text="GITHUB"
                />
                <Button
                  href="https://react-tree-sx4l.vercel.app/"
                  text="VIEW"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="project"
          >
            <img src={game7} alt="" />
            <div className="test">
              <h1>Bank Website</h1>
              <p>
                I created this bank when I was learning JavaScript
              </p>
              <div className="project__buttons">
                <Button
                  href="https://github.com/BAIBAKOFF/Bank"
                  text="GITHUB"
                />
                <Button
                  href="https://baibakoff.github.io/Bank/"
                  text="VIEW"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="project"
          >
            <img src={game8} alt="" />
            <div className="test">
              <h1>My Website</h1>
              <p>
                I created website when I studied on courses HTML CSS
              </p>
              <div className="project__buttons">
                <Button
                  href="https://github.com/BAIBAKOFF/FINANCEWEBSITE"
                  text="GITHUB"
                />
                <Button
                  href="https://baibakoff.github.io/FINANCEWEBSITE/"
                  text="VIEW"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="project"
          >
            <img src={game5} alt="" />
            <div className="test">
              <h1>Daily expenses</h1>
              <p>You can see your daily expenses</p>
              <div className="project__buttons">
                <Button
                  href="https://github.com/BAIBAKOFF/expenses/tree/baibak"
                  text="GITHUB"
                />
                <Button
                  href="https://expenses-sand-theta.vercel.app/"
                  text="VIEW"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="project"
          >
            <img src={adminPanel} alt="" />
            <div className="test">
              <h1>Admin Panel</h1>
              <p>Admin panel for Squad game community</p>
              <div className="project__buttons">
                <Button href="" text="VIDEO" />
                {/*<Button*/}
                {/*  href="https://expenses-sand-theta.vercel.app/"*/}
                {/*  text="VIEW"*/}
                {/*/>*/}
              </div>
              (in progress)
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
