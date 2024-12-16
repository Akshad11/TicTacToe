import "./homepage.css";
import Profile from "./assets/Profile.png";
import BtnLog from "./components/BtnLog";
import GameOptions from "./components/GameOptions";

export default function HomePage() {
  return (
    <div className="Home-div flex-center">
      <div className="Home-wrapper ">
        <div className="Nav-div flex-center">
          <div className="Nav-ImgName">
            <img src={Profile} alt="Profile" />
            <p>AD6797</p>
          </div>
          <BtnLog btnColor="" btnText="Log Out" clicked={() => {}} text="" />
        </div>

        <div className="Home_options">
          <h3>Options</h3>
          <div className="Games-Options flex-center">
            <GameOptions
              header="Rules"
              pText="Read the rules before playing"
              btnText="Check out rules"
            />
            <GameOptions
              header="Play with Bot"
              pText="Play with bot to pratices"
              btnText="Play >"
            />
            <GameOptions
              header="Play Online"
              pText="Play with bot to pratices"
              btnText="Play >"
              isPlayOnline={true}
            />
            <GameOptions
              header="Leaderboard"
              pText="Play with bot to pratices"
              btnText="See Board"
            />
            <GameOptions
              header="Create Room"
              pText="Play with bot to pratices"
              btnText="Create"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
