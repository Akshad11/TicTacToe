import { useState } from "react";
import BtnLogin from "./components/BtnLog";
import wallimg from "./assets/Wall.png";
import "./loginpage.css";

export default function LoginPage() {
  const [isLogin, setLogin] = useState(false);

  const ChangeLogin = () => {
    setLogin(!isLogin);
  };
  return (
    <div className="login-div flex-center">
      <div className="login-wrapper ">
        {isLogin ? (
          <div className="ImgFrame">
            <img src={wallimg} />
          </div>
        ) : (
          <div className="login-signup flex-center">
            <h1>
              Welcome To <br /> Tic Tac Toe
            </h1>
            <div className="signup-input flex-center">
              <label>Username</label>
              <input />
              <label>Email</label>
              <input />
              <label>Password</label>
              <input />
              <label>Confirm Password</label>
              <input />
            </div>
            <BtnLogin
              clicked={ChangeLogin}
              btnColor="green"
              btnText="Sign Up"
              text="already have an account? Log In!"
            />
          </div>
        )}
        {isLogin ? (
          <div className="login-login flex-center">
            <h1>Welcome Back!</h1>
            <div className="signup-input flex-center">
              <label>Username / Email</label>
              <input />

              <label>Password</label>
              <input />
            </div>
            <BtnLogin
              clicked={ChangeLogin}
              btnColor="green"
              btnText="Login"
              text="Don't have an account? Sign Up!"
            />
          </div>
        ) : (
          <div className="ImgFrame">
            <img src={wallimg} />
          </div>
        )}
      </div>
    </div>
  );
}
