import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ForgetPassword.css';
import p9 from './../../images/userImage.svg';

export default function ForgetPassword() {

  useEffect(() => {
    document.title = "Forget Password - Bableshaazad.com";
  }, []);

  return (
    <div>
      <>
      <div className='mainPageForgetPassword'>
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
                <input type="text" name="forgetpassword" id="forgetpassword" placeholder="USERNAME OR EMAIL" />
              </div>
            </div> 

            <div className="inputWraper">
              <button>Genrate Password</button>
            </div>

            <div className="row">
              <div className="signUPLink col-6 mt-2">
                <Link to='/logIn' className='text-light'>LOGIN</Link>
              </div>
              <div className="forgotPasswordLink col-6 mt-2 text-right">
                <Link to="/sign-up" className='text-light'>SignUp</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
    </div>
  )
}
