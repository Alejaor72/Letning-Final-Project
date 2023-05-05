import ConfigurationStyle from "./ConfigurationStyle.css";

import Psettings, { PSettingsAtt } from "../../components/ProfileSettings/ProfileSettings";
import { getPsettingsAction } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";

class Configuration extends HTMLElement {
  PSettingsList: Psettings[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    if (appState.profileSettings.length === 0) {
      const action = await getPsettingsAction();
      dispatch(action);
    } else {
      this.render();
    }
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;
    }
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./TutorialsStyle.css">
      `;
  }
  
  if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./TutorialsStyle.css">
      <div class="Menu">
        <h2>Letning</h2>
      </div>
      `;
  }

  if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./TutorialsStyle.css">   
    <div class="ProfilePhoto">
       <img src="/img/gatico.jpg" alt="" class="image1">
       <h1>Christian Yu</h1>
    </div>
      `;
  }
    const css = this.ownerDocument.createElement("style");
    css.innerHTML = ConfigurationStyle;
    this.shadowRoot?.appendChild(css);

     appState.profileSettings.forEach((data) => {
        const profileSettingsCard = this.ownerDocument.createElement("my-profile-settings") as Psettings;
        profileSettingsCard.setAttribute(PSettingsAtt.image, data.image);
        profileSettingsCard.setAttribute(PSettingsAtt.name, data.title);
        this.PSettingsList.push(profileSettingsCard);
    });

    const section1 = this.ownerDocument.createElement("section")
    section1.className = 'Section1'
    
    const profileSettingsCards = this.ownerDocument.createElement("div")
    profileSettingsCards.className = 'PSettingsSection'
    this.PSettingsList.forEach((profileSettingsCard) => {
        profileSettingsCards.appendChild(profileSettingsCard)
    });
    section1.appendChild(profileSettingsCards)
    this.shadowRoot?.appendChild(section1);

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./TutorialsStyle.css">
      <div class="ProfilePhoto">
       <img src="/img/gatico.jpg" alt="" class="image1">
       <img src="/img/edit.png" alt="" class="image2">
       <h1>Christian Yu</h1>
      /div>
      `;
     }
    
     if (this.shadowRoot) {
        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="./TutorialsStyle.css">
        <div class="config">
          <form action="config">
            <input type="email" id="Email">
            <input type="text" id="name">
            <input type="password" id="password">
            <input type="number" id="age">
          </form>
          <button>Save Changes</button>
        /div>
        `;
       }
 
    }
}

customElements.define("my-configuration", Configuration);