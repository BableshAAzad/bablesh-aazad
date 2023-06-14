import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import p9 from './../../images/userImage.svg'

export default function SignUp() {
  return (
    <>
      <div className='mainPageSignUp'>
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
                <input type="text" name="name" id="name" placeholder="FULL NAME" />
              </div>
            </div>

            <div className="inputWraper">
              <div className="iputInner">
                <div className="userIcon">
                  <span class="material-symbols-outlined"> account_circle </span>
                </div>
                <input type="text" name="username" id="username" placeholder="USERNAME" />
              </div>
            </div>

            <div className="inputWraper">
              <div className="iputInner">
                <div className="userIcon">
                  <span className="material-symbols-outlined"> mail </span>
                </div>
                <input type="email" name="email" id="email" placeholder="EMAIL" />
              </div>
            </div>

            <div className="inputWraper">
              <div className="iputInner">
                <div className="userIcon">
                  <span className="material-symbols-outlined"> lock </span>
                </div>
                <input type="password" name="password" id="password" placeholder="PASSWORD" />
              </div>
            </div>

            <div className="inputWraper">
              <div className="iputInner">
                <div className="userIcon">
                  <span className="material-symbols-outlined"> lock </span>
                </div>
                <input type="password" name="confPassword" id="confPassword" placeholder="CONFIRM PASSWORD" />
              </div>
            </div>

            <div className="inputWraper">
              <button>SignUp</button>
            </div>

            <div className="row">
              <div className="signUPLink col-6 mt-2">
                <Link to='/logIn' className='text-light'>LOGIN</Link>
              </div>
              <div className="forgotPasswordLink col-6 mt-2">
                <Link to="/forgetPassword" className='text-light'> Forgot password? </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
