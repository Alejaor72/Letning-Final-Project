import TutorialsStyle from "./TutorialsStyle.css";

import Psettings, { PSettingsAtt } from "../../components/ProfileSettings/ProfileSettings";
import Tutorials, { TutorialsAtt } from "../../components/Tutorials/Tutorials";
import { getPsettingsAction } from "../../store/actions";
import { getTutorials} from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";

class TutorialsProfile extends HTMLElement {
  PSettingsList: Psettings[] = [];
  MyTutorialsList:Tutorials[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    if (appState.profileSettings.length === 0) {
      const action = await getPsettingsAction();
      dispatch(action);
    } if (appState.tutorials.length === 0) {
      const actions = await getTutorials();
      dispatch(actions);
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
    /////my tutorials 
    const MyTutorials = appState.tutorials.filter((user)=>{
      return user.like === true
    })

    MyTutorials.forEach((data)=>{
      const MyTutorialsCard = this.ownerDocument.createElement("my-tutorials") as Tutorials;
      MyTutorialsCard.setAttribute(TutorialsAtt.image, data.image);
      MyTutorialsCard.setAttribute(TutorialsAtt.tittle, data.title);
      MyTutorialsCard.setAttribute(TutorialsAtt.creator, data.creator);
      this.MyTutorialsList.push(MyTutorialsCard);
    })
    
    const section2 = this.ownerDocument.createElement("section")
    section2.className = 'Section2'

    const MyTutorialsCards = this.ownerDocument.createElement("div")
    MyTutorialsCards.className = 'MyTutorialsSection'
    this.MyTutorialsList.forEach((MyTutorialsCard) => {
      MyTutorialsCards.appendChild(MyTutorialsCard)
    });
    section2.appendChild(MyTutorialsCards)
    this.shadowRoot?.appendChild(section2);
    
    this.shadowRoot?.appendChild(containerderecha);

    const containerizq = this.ownerDocument.createElement("div")
    containerizq.className = 'containerizq'

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./TutorialsStyle.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">   
    <div class="ProfilePhoto">
       <img src="/img/gatico.jpg" alt="" class="image1" width="200px">
       <h1 class="Title">Christian Yu</h1>
    </div>
      `;
  }
    const css = this.ownerDocument.createElement("style");
    css.innerHTML = TutorialsStyle;
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
  
    this.shadowRoot?.appendChild(containerizq);


  this.shadowRoot?.appendChild(container);
  }
}

customElements.define("my-tutorials-profile", TutorialsProfile);
