import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LogIn.css';
import p9 from './../../../images/userImage.svg';

export default function LogIn(props) {
  let location = useLocation();

  useEffect(() => {
    document.title = "Login - Bableshaazad.com";
  }, []);


  const st = location.state && location.state.st;
  return (
    <>
      <div className='mainPage'>
        <div className="loginInner">
          <form action="" method="post">
            <h4 style={{ textAlign: 'center', marginTop: '50px' }}>{st}</h4>
            <div className="loginLogo">
              <img src={p9} alt="Login" />
            </div>

            <div className="inputWraper">
              <div className="iputInner">
                <div className="userIcon">
                  <span className="material-symbols-outlined"> person </span>
                </div>
                <input type="text" name="username" id="username" placeholder="USERNAME" />
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
              <button>LOGIN</button>
            </div>

            <div className="row">
              <div className="signUPLink col-6 mt-2">
                <Link to='/sign-up' className='text-light'>SignUp</Link>
              </div>
              <div className="forgotPasswordLink col-6 mt-2">
                <Link to="/forget-password" className='text-light'> Forgot password? </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
