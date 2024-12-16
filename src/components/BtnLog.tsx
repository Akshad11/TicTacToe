import "./btnlogin.css";

interface myBtnlog {
  text: string;
  btnText: string;
  btnColor: string;
  clicked: () => void;
}

export default function BtnLog({ text, btnColor, clicked, btnText }: myBtnlog) {
  return (
    <div>
      <button
        className="btnLog"
        type="submit"
        style={{ background: `${btnColor}` }}
      >
        {btnText}
      </button>
      <p className="btnp" onClick={clicked}>
        {text}
      </p>
    </div>
  );
}
