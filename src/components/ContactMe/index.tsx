import React, { ReactElement } from "react";
import { Link } from "gatsby";

import GithubIcon from "../../images/github.svg";
import LinkedinIcon from "../../images/linkedin.svg";
import commonStyles from "../../styles/common.module.scss";

interface Props {}

function ContactMe({}: Props): ReactElement {
  return (
    <div
      className={commonStyles.container}
      style={{ paddingTop: "40px", paddingBottom: "40px" }}
    >
      <section id="contact-me">
        <h1 style={{ position: "relative", left: "10px" }}>Contact Me</h1>
        <p
          className={commonStyles.secondaryText}
          style={{ paddingLeft: "10px" }}
        >
          /* Feel free to say a Hi */
        </p>

        <p
          className={commonStyles.secondaryText}
          style={{ paddingLeft: "10px" }}
        >
          email: arunmurugan200@gmail.com
          <div style={{ display: "flex", marginTop: "20px" }}>
            <Link
              target="_blank"
              rel="noopener"
              to="https://github.com/ArunMurugan78"
            >
              {" "}
              <img
                src={GithubIcon}
                alt="gtihub"
                style={{ height: "35px", width: "35px", marginRight: "20px" }}
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener"
              to="https://www.linkedin.com/in/arun-murugan-50885717a/"
            >
              <img
                src={LinkedinIcon}
                alt="linkedin"
                style={{ height: "35px", width: "44px" }}
              />
            </Link>
          </div>
        </p>
      </section>
    </div>
  );
}

export default ContactMe;
