import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
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
      <a
        href="https://drive.google.com/file/d/1ue7y0vAB3Bls6T6-zAKKYeAnDqKx0Ifb/view?usp=sharing"
        target="_blank"
      >
        <button className="btn">Download Resume</button>
      </a>
    </section>
  );
}
