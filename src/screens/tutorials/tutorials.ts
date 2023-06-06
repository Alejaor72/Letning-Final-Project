import TutorialsStyle from "./TutorialsStyle.css";

import Psettings, { PSettingsAtt } from "../../components/ProfileSettings/ProfileSettings";
import { getPsettingsAction } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";

class TutorialsProfile extends HTMLElement {
  PSettingsList: Psettings[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;
    }
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./TutorialsStyle.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
      `;
  }
  const container = this.ownerDocument.createElement("div")
  container.className = 'containerall'
  
  const containerderecha = this.ownerDocument.createElement("div")
  containerderecha.className = 'containerderecha'
  if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./TutorialsStyle.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
      <div class="Menu">
        <h2>Letning</h2>
      </div>
      `;
  }
    
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./TutorialsStyle.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
      <div class="Title">
      <h3>My Tutorials</h3>
      </div>
      `;
     }
    
  }
}

customElements.define("my-tutorials-profile", TutorialsProfile);
