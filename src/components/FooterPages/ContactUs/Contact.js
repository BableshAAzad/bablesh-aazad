import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Contact(props) {
  return (
    <div>
      <div className="container mt-3">
        <h3 className="text-info">{props.heading}</h3>
        <hr />
        <form className="row g-3 formCol">
          <div className="col-md-6 mt-2">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="inputName"
              placeholder="Full Name"
            />
          </div>
          <div className="col-md-6 mt-2">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="xyz@mail.com"
            />
          </div>
          <div className="col-md-6 mt-2">
            <label htmlFor="reasonForContact" className="form-label">
              Reason For Contact
            </label>
            <textarea
              className="form-control"
              placeholder="Type Your query"
            ></textarea>
          </div>
          {/* <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div> */}
          <div className="col-12 mt-2">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-md-4 mt-2">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4 mt-2">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-control">
              <option>Choose...</option>
              <option>Munbai</option>
              <option>Benglore</option>
              <option>Noida</option>
              <option>MP</option>
              <option>CG</option>
              <option>Others</option>
            </select>
          </div>
          <div className="col-md-2 mt-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-md-4 mt-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                <Link to="/">Term & Conditions</Link>
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-success ml-4 mb-2">
              Submit
            </button>
          </div>
        </form>
        <hr />
      </div>

      <div className="support text-center">
        <h3 className="text-secondary">Contact Details</h3>
        <br />
        <Link to="tel:+917898300815" className="boss">
          <FontAwesomeIcon icon={faPhone} shake />
          &nbsp;+91-7898300815
        </Link>
        <br />
        <Link to="mailto:bableshaazad@outlook.com" className="boss">
          <FontAwesomeIcon icon={faEnvelope} flip />
          &nbsp;Bableshaazad@outlook.com
        </Link>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row text-center">
            <div className="col-md-2">
              <p className="faceb socialP">FaceBook Page</p>
              <Link
                to="https://www.facebook.com/Bableshaazad/"
                target="_blank"
                rel="noopener noreferrer"
                className="sharad text-warning"
              >
                <FacebookIcon />
              </Link>
              <br />
              <Link
                to="https://www.facebook.com/Bableshaazad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </div>
            <div className="col-md-2">
              <p className="twit socialP">Twitter Page</p>
              <Link
                to="https://twitter.com/bableshaazad"
                target="_blank"
                rel="noopener noreferrer"
                className="sharad text-info"
              >
                <TwitterIcon></TwitterIcon>
              </Link>
              <br />
              <Link
                to="https://twitter.com/bableshaazad"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </div>
            <div className="col-md-2 socialP">
              <p className="inst">Instagram Page</p>
              <Link
                to="https://www.instagram.com/bableshaazad/"
                target="_blank"
                rel="noopener noreferrer"
                className="sharad"
              >
                <InstagramIcon />
              </Link>
              <br />
              <Link
                to="https://www.instagram.com/bableshaazad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </div>
            <div className="col-md-2 socialP">
              <p className="yout">Youtube Channel</p>
              <Link
                to="https://www.youtube.com/channel/UCi1r-Lw0qoggZO0ri-7GyTQ"
                target="_blank"
                rel="noopener noreferrer"
                className="sharad text-danger"
              >
                <YouTubeIcon />
              </Link>
              <br />
              <Link
                to="https://www.youtube.com/channel/UCi1r-Lw0qoggZO0ri-7GyTQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </Link>
            </div>
            <div className="col-md-2 socialP">
              <p className="linke">LinkedIn Page</p>
              <Link
                to="https://www.linkedin.com/in/bableshaazad/"
                target="_blank"
                rel="noopener noreferrer"
                className="sharad"
              >
                <LinkedInIcon></LinkedInIcon>
              </Link>
              <br />
              <Link
                to="https://www.linkedin.com/in/bableshaazad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </Link>
            </div>
            <div className="col-md-2 socialP">
              <p className="github">GitHub</p>
              <Link
                className="social-icon-link text-dark fhub githubi"
                to="https://github.com/bableshaazad"
                target="_blank"
                aria-label="GitHub"
                rel="noopener noreferrer"
              >
                <GitHubIcon></GitHubIcon>
              </Link>
              <br />
              <Link
                className="githubi"
                to="https://github.com/bableshaazad"
                target="_blank"
                aria-label="GitHub"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
