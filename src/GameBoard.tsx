import { useState } from "react";
import "./gameboard.css";
import Profile from "./assets/Profile.png";

export default function GameBoard() {
  const [list, setList] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isPlayer1, setIsPlayer1] = useState(true);

  const onClickAdd = (index: number) => {
    if (list[index] === "") {
      const newList = [...list];
      newList[index] = isPlayer1 ? "X" : "O";
      setList(newList);
      setIsPlayer1(!isPlayer1);
    }
  };

  // Rendering the board dynamically
  const BoardDiv = () => {
    return list.map((value, index) => (
      <div
        key={index}
        className="Boarddiv flex-center"
        onClick={() => onClickAdd(index)}
      >
        <h1 className="OXheader">{value}</h1>
      </div>
    ));
  };

  return (
    <div className="gameboard-div flex-center">
      <div className="gameboard-wrapper">
        <div className="gb-playInfo flex-center">
          <div className="gb-playInfo1">
            <div className="Nav-ImgName flex-center">
              <img src={Profile} alt="Player 1 Profile" />
              <p>Player 1</p>
            </div>
          </div>
          <div className="gb-playInfo2">
            <div className="Nav-ImgName flex-center">
              <img src={Profile} alt="Player 2 Profile" />
              <p>Player 2</p>
            </div>
          </div>
        </div>
        <div className="Turn-div">
          <h1>{isPlayer1 ? "Player 1 (X) TURN" : "Player 2 (O) TURN"}</h1>
        </div>
        <div className="gameboard-play flex-center">
          <div className="Board flex-center">{BoardDiv()}</div>
        </div>
      </div>
    </div>
  );
}
