import {MouseEventHandler} from "react";

type Props = {
  scrollToBlock: MouseEventHandler | undefined;
}

export const MainHeader = ({scrollToBlock}: Props) => {
  return (
    <header className="header">
      <h1>BAIBAKOV</h1>
      <div>
        <ul className="header-list">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ABOUT ME</a>
          </li>
          <li>
            <a href="/">MY PROJECTS</a>
          </li>
          <li>
            <a href="/">LINKEDIN</a>
          </li>
          <li>
            <button onClick={scrollToBlock}>CONTACT</button>
          </li>
        </ul>
      </div>
    </header>
  );
};
