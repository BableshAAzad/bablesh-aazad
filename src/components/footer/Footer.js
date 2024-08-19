import {
    faDragon,
    faMessage,
    faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../navbar/home-page/Button";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join for latest offer and updates news get in mail.
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
          </div>
        </section>
        <section className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <NavLink className="linka" to="/howItWorks">
                How it works
              </NavLink>
              <NavLink className="linka" to="/careers">
                Careers
              </NavLink>
              <NavLink className="linka" to="/investors">
                Investors
              </NavLink>
              <NavLink className="linka" to="/termsOfServices">
                Terms of Service
              </NavLink>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <NavLink className="linka" to="/contact">
                Contact
              </NavLink>
              <NavLink className="linka" to="/support">
                Support
              </NavLink>
              <NavLink className="linka" to="/designations">
                Destinations
              </NavLink>
              <NavLink className="linka" to="/sponsorships">
                Sponsorships
              </NavLink>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <NavLink className="linka" to="/videoUpload">
                Submit Video
              </NavLink>
              <NavLink className="linka" to="/smbassadors">
                Ambassadors
              </NavLink>
              <NavLink className="linka" to="/agency">
                Agency
              </NavLink>
              <NavLink className="linka" to="/influencer">
                Influencer
              </NavLink>
            </div>
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <Link
                className="linka"
                to="https://discordapp.com/users/1124405821950935132"
                target="_blank"
                aria-label="Discord"
              >
                Discord &nbsp;
                <FontAwesomeIcon icon={faVrCardboard} shake />
              </Link>
              <Link
                className="linka"
                to="https://www.snapchat.com/add/bableshaazad?share_id=Xj088v38Ars&locale=en-US"
                target="_blank"
                aria-label="Snapchat"
              >
                Snapchat &nbsp;
                <FontAwesomeIcon icon={faMessage} bounce />
              </Link>
              <Link
                className="linka"
                to="https://www.linkedin.com/in/bableshaazad/"
                target="_blank"
                aria-label="Linkedin"
              >
                LinkedIn
              </Link>
              <Link
                className="linka"
                to="https://twitter.com/bableshaazad"
                target="_blank"
                aria-label="Twitter"
              >
                Twitter
              </Link>
            </div>
          </div>
        </section>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link
                to="https://bableshaazad.com/"
                aria-label="BableshAAzad"
                className="social-logo"
              >
                BableshAAzad.com&nbsp;
                <FontAwesomeIcon icon={faDragon} beat />
              </Link>
            </div>
            <small className="website-rights">BableshAAzad © 2023</small>
            <div className="social-icons">
              <Link
                className="social-icon-link iconsss facebook text-warning"
                to="https://www.facebook.com/aazadbablesh/"
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIcon></FacebookIcon>
              </Link>
              <Link
                className="social-icon-link iconsss instagram"
                to="https://www.instagram.com/bableshaazad/"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon></InstagramIcon>
              </Link>
              <Link
                className="social-icon-link iconsss youtube text-danger"
                to="https://www.youtube.com/channel/UCi1r-Lw0qoggZO0ri-7GyTQ"
                target="_blank"
                aria-label="Youtube"
              >
                <YouTubeIcon></YouTubeIcon>
              </Link>
              <Link
                className="social-icon-link iconsss twitter text-info"
                to="https://twitter.com/bableshaazad"
                target="_blank"
                aria-label="Twitter"
              >
                <TwitterIcon></TwitterIcon>
              </Link>
              <Link
                className="social-icon-link iconsss linkedin"
                to="https://www.linkedin.com/in/bableshaazad/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedInIcon></LinkedInIcon>
              </Link>
              <Link
                className="social-icon-link iconsss githubi"
                to="https://github.com/bableshaazad"
                target="_blank"
                aria-label="GitHub"
              >
                <GitHubIcon></GitHubIcon>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
