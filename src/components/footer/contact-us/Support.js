import "./Contact.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Helmet } from "react-helmet";

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Support - BableshAAzad.com</title>
        <meta name="description" content="You will follow us and support our efforts to build a large and robust network." />
      </Helmet>
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
                <TwitterIcon />
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
                <LinkedInIcon />
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
                <GitHubIcon />
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
    </>
  );
};

export default Support;
