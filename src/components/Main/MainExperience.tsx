import coding from '../../assets/codingImg.jpg';
import stack1 from '../../assets/image 138.png';
import stack2 from '../../assets/image 139.png';
import stack3 from '../../assets/image 140.png';
import stack4 from '../../assets/image 141.png';
import stack5 from '../../assets/image 142.png';
import stack6 from '../../assets/image 143.png';
import stack7 from '../../assets/image 144.png';
import { Wrapper } from '../Wrapper/Wrapper';

export const MainExperience = () => {
  return (
    <div className="experience">
      <Wrapper>
        <div className="experience-content">
          <div data-aos="fade-up" data-aos-duration="1000">
            <ul>
              <li>
                Strong understanding of HTML - block and semantic
                layout.
              </li>
              <li>
                Solid knowledge of CSS - working with flexbox, grid
                layout, responsive design, and animations.
              </li>
              <li>
                Good understanding of the SCSS preprocessor, making
                styling and code maintenance more convenient.
              </li>
              <li>
                Experience working with Bootstrap, significantly
                speeding up the process of creating modern,
                responsive, and stylish designs.
              </li>
              <li>
                Solid knowledge of JavaScript, ability to work with
                DOM-elements, events, ES-6 syntax and axios requests.
              </li>
              <li>Good experience working with TypeScript.</li>
              <li>Solid knowledge of React</li>
            </ul>
          </div>
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src={coding}
            width={100}
            alt="/"
          />
        </div>
        <div className="experience-skills">
          <h1>MY SKILLS</h1>
          <div data-aos="fade-up" data-aos-duration="1000">
            <img src={stack4} width={100} alt="" />
            <img src={stack1} width={100} alt="" />
            <img src={stack2} width={100} alt="" />
            <img src={stack7} width={100} alt="" />
            <img src={stack3} width={100} alt="" />
            <img src={stack6} width={100} alt="" />
            <img src={stack5} width={100} alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
