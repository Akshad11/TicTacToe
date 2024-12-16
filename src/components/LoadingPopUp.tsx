import Popup from "reactjs-popup";
import "./loadingpopup.css";

interface myLoadPop {
  closepop: () => void;
}

export default function LoadingPopup({ closepop }: myLoadPop) {
  return (
    <div className="popup-div flex-center">
      <h2 className="popup-header">Finding a player</h2>
      <p className="popup-p">It usually takes 30 seconds</p>
      <button className="popup-btn" type="submit" onClick={closepop}>
        Cancel
      </button>
    </div>
  );
}
