import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <div>
        Copyright ©{new Date().getFullYear()} All rights reserved | Made by
        <span> Aly Hamdy</span>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/aly-hamdy/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="i" />
        </a>
        <a href="https://github.com/el7amrawy" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="i" />
        </a>
        <a href="mailto:alihamdihamdi.27@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="i" />
        </a>
      </div>
    </footer>
  );
}
