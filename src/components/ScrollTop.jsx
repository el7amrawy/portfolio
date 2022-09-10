import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollTop() {
  return (
    <div
      className="scroll-top"
      onClick={() => {
        document.documentElement.scrollIntoView({
          block: "start",
        });
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} className="i" />
    </div>
  );
}
