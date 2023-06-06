import ChannelStyle from "./ChannelStyle.css";
import Psettings, { PSettingsAtt } from "../../components/ProfileSettings/ProfileSettings";
import { getPsettingsAction} from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";

class ChannelProfile extends HTMLElement {
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
      <link rel="stylesheet" href="./ChannelStyle.css">
      `;
  }
  
  if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./ChannelStyle.css">
      <div class="Menu">
        <h2>Letning</h2>
      </div>
      `;
  }

  if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./ChannelStyle.css">   
    <div class="ProfilePhoto">
       <img src="/img/gatico.jpg" alt="" class="image1">
       <h1>Christian Yu</h1>
    </div>
      `;
  }
    const css = this.ownerDocument.createElement("style");
    css.innerHTML = ChannelStyle;
    this.shadowRoot?.appendChild(css);

     appState.profileSettings.forEach((data) => {
        const profileSettingsCard = this.ownerDocument.createElement("my-profile-settings") as Psettings;
        profileSettingsCard.setAttribute(PSettingsAtt.image, data.image);
        profileSettingsCard.setAttribute(PSettingsAtt.name, data.title);
        this.PSettingsList.push(profileSettingsCard);
    });

    const section1 = this.ownerDocument.createElement("section")
    section1.className = 'Section2'
    
    const profileSettingsCards = this.ownerDocument.createElement("div")
    profileSettingsCards.className = 'PSettingsSection'
    this.PSettingsList.forEach((profileSettingsCard) => {
        profileSettingsCards.appendChild(profileSettingsCard)
    });
    section1.appendChild(profileSettingsCards)
    this.shadowRoot?.appendChild(section1);

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./ChannelStyle.css">
      <div class="Title">
      <h3>Unpload a New Tutorial</h3>
      <img src="/img/newvideo.jpg" alt="" class="">
      </div>
      `;
     }
    /////my videos 
    
  }
}

customElements.define("my-channel-profile", ChannelProfile);
