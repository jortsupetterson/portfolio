import "../styles/Certificates.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";
export default function Certificates() {
  return (
    <>
      <a href="/html-certificate.pdf" target="_blank">
        <FontAwesomeIcon icon={faHtml5} />
        HTML Certificate
      </a>
      <a href="/css-certificate.pdf" target="_blank">
        <FontAwesomeIcon icon={faCss} />
        CSS Certificate
      </a>
      <a href="/javascript-certificate.pdf" target="_blank">
        <FontAwesomeIcon icon={faJs} />
        JS Certificate
      </a>
      <a href="/sql-certificate.pdf" target="_blank">
        <FontAwesomeIcon icon={faDatabase} />
        SQL Certificate
      </a>
      <a href="/sql-certificate.pdf" target="_blank">
        <FontAwesomeIcon icon={faReact} />
        React Certificate
      </a>
      <a href="/typescript-certificate.pdf" target="_blank">
        <FontAwesomeIcon icon={faCode} />
        TS Certificate
      </a>
    </>
  );
}
