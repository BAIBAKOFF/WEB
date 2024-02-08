import {Button} from "../../shared/Button/Button";
import {LegacyRef} from "react";

type Props = {
  ref: LegacyRef<any> | undefined;
}

export const MainContact = ({ref}: Props) => {
  return (
    <div ref={ref} className="contact">
      <div className="contact__inputs">
        <h1>CONTACT</h1>
        <div className="contact__input">
          <input
            data-aos="zoom-out-right"
            required
            type="text"
            placeholder="Enter your name*"
          />
          <input
            data-aos="zoom-out-left"
            required
            type="text"
            placeholder="Enter your Email*"
          />
        </div>
        <textarea
          data-aos="zoom-out-down"
          required
          name="message"
          placeholder="Enter your message*"
          id="1"
        />
      </div>
      <Button text="Sumbit" />
    </div>
  )
}