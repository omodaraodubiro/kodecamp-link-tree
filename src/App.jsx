import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faTwitter,
  faInstagram,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="linktree-container">
        <main>
          <div className="profile">
            <img src="./kodecamp-link-tree/omodara.jpeg" alt="Profile" />
            <h2>omodara odubiro</h2>
          </div>
          <div className="links">
            <a href="https://example.com">Website</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://etsy.com">Etsy</a>
            <a href="https://youtube.com">YouTube</a>
          </div>
        </main>
        <div className="links-font">
          <FontAwesomeIcon icon={faSlack} className="left-icon" />
          <FontAwesomeIcon icon={faGithub} className="right-icon" />
        </div>
        <footer>
          <div className="footer-task">
            <img src="./kodecamp-link-tree/kodecamp1.png" alt="kodecamp-logo" />
            <h2 className="footer-text">KodeCamp Internship Task</h2>
            <img src="./kodecamp-link-tree/kodeHauz.png" alt="kodecamp-logo" />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
