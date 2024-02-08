import { Button } from '../shared/Button/Button';
import './discord.css';

type Props = {
  closeModal: () => void;
};

export const Discord = ({ closeModal }: Props) => {
  return (
    <div className="discord">
      <div className="discord-content">
        <video controls>
          <source
            src="https://drive.google.com/uc?export=download&id=1ueNG2rjVzKSVerIt-FP0zb0zHo3y2fec"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          <span>
            Discord bot was invented for the gaming community MDJ in
            the game Squad.
          </span>
          <br />
          <br />
          At the moment of recording, 4 functions were made.
          <br />
          <span>
            1) slash command 'prize' - allows players to nominate
            other players for the best player of the month nomination.
          </span>
          <br />
          - The category in which the player wants to nominate another
          player is selected.
          <br />
          - Next, select the discord profile of the player who is
          nominated for the nomination.
          <br />
          As a result we get: (the player who nominates) nominated the
          player (the player who was nominated) for the nomination
          (Best CMD) and a comment from the player who nominates.
          <br />
          <br />
          <span>
            2) So seeding is the act of trying to populate a server.
            No one wants to join an empty server, so usually the
            server will have a few people join (usually from their
            clan/community) and AFK in order to get more to join.
          </span>
          <br />
          So, the 'seedtime' slash command allows players to find out
          how many minutes/hours they have checked in SEED mode and in
          the future they can exchange the hours for VIP status. The
          minutes/hours query goes to the database and returns a
          number.
          <br />- To check your seed time, you just need to enter your
          SteamID
          <br />
          <br />
          <span>
            3) Slash command 'CheckSeedtime' - allows the community
            admin to check the seed clock without entering the
            database.
          </span>
          <br />- In the input 'select-a-user' selects the player we
          want to check.
          <br />
          <br />
          <span>
            4) Slash command 'WithoutSeedtime' - allows the community
            admin to exchange seed time for Vip status among players.
          </span>
          <br />- We enter the steamID of the player we will work with
          and the number of hours we want to add/subtract.
          <br />
          <br />
          Everything related to the database works through the discord
          bot. We can add/remove hours for seed mode. We can check how
          much time a particular person has in the database, we find
          him through his steam ID.
          <br />
          <br />I will attach a video that will show how it works. The
          text will be in Russian, because the MDJ gaming community is
          Russian-speaking people.
        </p>
      </div>
      <Button text="Close Modal" onClick={closeModal} />
    </div>
  );
};
