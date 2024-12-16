import Popup from "reactjs-popup";
import "./gameoptions.css";
import LoadingPopup from "./LoadingPopUp";

interface MyGameOptions {
  header: string;
  pText: string;
  btnText: string;
  onButtonClick?: () => void;
  customClass?: string;
  isPlayOnline?: boolean;
}

export default function GameOptions({
  header,
  pText,
  btnText,
  onButtonClick,
  customClass = "",
  isPlayOnline = false,
}: MyGameOptions) {
  if (!header || !pText || !btnText) {
    console.error("Missing required props: header, pText, or btnText.");
    return null; // Early return to prevent rendering
  }

  return (
    <div className={`GameOptions-div flex-center ${customClass}`}>
      <div>
        <h1 tabIndex={0}>{header}</h1>
        <p tabIndex={0}>{pText}</p>
      </div>
      {isPlayOnline ? (
        <Popup
          trigger={
            <button
              type="button"
              aria-label={btnText}
              onClick={onButtonClick}
              className="game-btn"
            >
              {btnText}
            </button>
          }
          modal
          nested
        >
          {(close) => <LoadingPopup closepop={close} />}
        </Popup>
      ) : (
        <button
          type="button"
          aria-label={btnText}
          onClick={onButtonClick}
          className="game-btn"
        >
          {btnText}
        </button>
      )}
    </div>
  );
}
