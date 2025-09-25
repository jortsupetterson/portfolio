import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Certificates from "../components/Certificates.tsx";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/App.css";
import avatarUrl from "../../public/208110781.png";

export default function App() {
  return (
    <div id="layout">
      <header role="banner" aria-label="Jori Lehtinen portfolio">
        <nav aria-label="Main navigation">
          <ul>
            <li>
              <NavLink to="/">
                <img
                  src={avatarUrl}
                  width={80}
                  height={80}
                  alt="Jori Lehtinen, profiilikuva"
                  decoding="async"
                  loading="eager"
                  className="avatar"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FontAwesomeIcon icon={faAddressCard} />
                Contact Information
              </NavLink>
            </li>
            <li>
              <a href="https://github.com/jortsupetterson" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                GitHub Profile
              </a>
            </li>
            <li>
              <NavLink to="/certificates">
                <FontAwesomeIcon icon={faGripVertical} />
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main role="main" id="content">
        <Suspense fallback={<p>Loading…</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Certificates />
        <small>© {new Date().getFullYear()} Jori Lehtinen</small>
      </footer>
    </div>
  );
}
