import React from 'react';
import './LogIn.css';
import p9 from './../../images/userImage.svg'
 
export default function LogIn() {
  return (
    <>
    <div className='mainPage'>
      <div className="loginInner">
      <form action="" method="post">
        <div className="loginLogo">
          <img src={p9} alt="Login" />
        </div>

        <div className="inputWraper">
          <div className="iputInner">
            <div className="userIcon">
              <span className="material-symbols-outlined"> person </span>
            </div>
            <input type="text" name="" id="" placeholder="USERNAME" />
          </div>
        </div>

        <div className="inputWraper">
          <div className="iputInner">
            <div className="userIcon">
              <span className="material-symbols-outlined"> lock </span>
            </div>
            <input type="password" name="" id="" placeholder="PASSWORD" />
          </div>
        </div>

        <div className="inputWraper">
          <button>LOGIN</button>
        </div>
        <div className="forgotPassword">
          <a href="/"> Forget password? </a>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}
