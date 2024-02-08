
type Props = {
  main: () => void;
  aboutMe: () => void;
  projectsRef: () => void;
  contactRef: () => void;
}

export const MainHeader = ({main, aboutMe, projectsRef, contactRef}:Props ) => {
  return (
    <header className="header">
      <h1>BAIBAKOV</h1>
      <div>
        <ul className="header-list">
          <li>
            <button onClick={main}>HOME</button>
          </li>
          <li>
            <button onClick={aboutMe}>ABOUT ME</button>
          </li>
          <li>
            <button onClick={projectsRef}>MY PROJECTS</button>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/sergei-baibakov-5b8b44265/">LINKEDIN</a>
          </li>
          <li>
            <button onClick={contactRef}>CONTACT</button>
          </li>
        </ul>
      </div>
    </header>
  );
};
