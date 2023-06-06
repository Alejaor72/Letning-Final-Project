import HomeStyle from "./HomeStyle.css";

import Categories, { CategoriesAtt } from "../../components/CategoriesButton/CategoriesButton";
import LogoDiv from "../../components/LogoDiv/LogoDiv";
import ButtonSignIn from "../../components/ButtonSignIn/ButtonSignIn";
import ButtonLogin from "../../components/ButtonLogIn/ButtonLogIn";
import BannerHome from "../../components/BannerHome/BannerHome";
import ShowButton from "../../components/ShowButton/ShowButton";
import CreateAButton from "../../components/CreateAButton/CreateAButton";
import TutorialsCard from "../../components/Tutorials/Tutorials";
import CategoriesButton from "../../components/CategoriesButton/CategoriesButton";
import { getCategories } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { setUserCredentials } from "../../store/actions";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import firebase from "../../utils/firebase";
import storage from "../../utils/storage";
import { ButtonInput } from "../../components/export";

export default class Home extends HTMLElement  {
  CategoriesList: Categories[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }
  
  logOutUser(){
    if(appState.user !== null || ''){
      localStorage.clear()
      dispatch(setUserCredentials(''));
      appState.Post = []
      sessionStorage.clear();
      dispatch(navigate(Screens.LOGIN));
      location.reload();
    }
  }

  async render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;
    
      const css = this.ownerDocument.createElement("style");
      css.innerHTML = HomeStyle;
      this.shadowRoot?.appendChild(css);   
    }

    const container = this.ownerDocument.createElement("section")
    container.className = 'container'

    const UpPart = this.ownerDocument.createElement("section")
    UpPart.className = 'UpPart'
    
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./HomeVisitorsStyle.css">
      <div class="Menu">
        <h2>Letning</h2>
      </div>
      `;
  }
    //const logo = this.ownerDocument.createElement("logo-div") as LogoDiv;
    //UpPart.appendChild(logo)
    const ButtonI = this.ownerDocument.createElement("button-input") as ButtonInput;
    UpPart.appendChild(ButtonI)
    const siginbutton = this.ownerDocument.createElement("button-signin") as ButtonSignIn;
    UpPart.appendChild(siginbutton)
    const loginbutton = this.ownerDocument.createElement("button-login") as ButtonLogin;
    UpPart.appendChild(loginbutton)
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./HomeStyle.css">
      <div class="Menu">

         <a href="" class="profilephoto">
         <img src="../../img/gatico.jpg" class="perfil" />
         </a>
        </div>
      </div>
      `;
  }
    this.shadowRoot?.appendChild(UpPart);

    const Banner = this.ownerDocument.createElement("section")
    Banner.className = 'Banner'
    
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./HomeStyle.css">   
    <div class="Banner">
       <img src="/img/BannerHome.png" alt="" class="image1">
       <div class="Bannertext">
        <h1>Letning is a platform of variety tutorials</h1>
        <p>Learn with people of all kinds, and from anywhere.</p>
      </div>
    </div>
      `;
  }
    const bannerImage = this.ownerDocument.createElement("banner-home") as BannerHome;
    Banner.appendChild(bannerImage)
    const seeButton = this.ownerDocument.createElement("show-button") as ShowButton;
    Banner.appendChild(seeButton)
    this.shadowRoot?.appendChild(Banner);

    const categoriesText = this.ownerDocument.createElement("h2");
    categoriesText.textContent = "Select categories"
    this.shadowRoot?.appendChild(categoriesText);
    
    //if (this.shadowRoot) {
      //this.shadowRoot.innerHTML += `
      //<link rel="stylesheet" href="./HomeVisitorsStyle.css">
      //<div class="Title">
      //<h3>Select the Categories</h3>
      //</div>
      //`;
      //}

    //appState.categories.forEach((data) => {
        //const CategoriesCard = this.ownerDocument.createElement("my-categories-button") as CategoriesButton;
        //CategoriesCard.setAttribute(CategoriesAtt.image, data.image);
        //CategoriesCard.setAttribute(CategoriesAtt.name, data.title);
        //this.CategoriesList.push(CategoriesCard);
    //});

    //const section2 = this.ownerDocument.createElement("section")
    //section2.className = 'Section2'

    //const CategoriesCards = this.ownerDocument.createElement("div")
    //CategoriesCards.className = 'CategoriesSection'
   // this.CategoriesList.forEach((CategoriesCard) => {
    //  CategoriesCards.appendChild(CategoriesCard)
    //});
    //this.shadowRoot?.appendChild(CategoriesCards);

    //section2.appendChild(CategoriesCards)
    //this.shadowRoot?.appendChild(section2);

    const tutorialsText = this.ownerDocument.createElement("h2");
    tutorialsText.textContent = "Tutorials"
    this.shadowRoot?.appendChild(tutorialsText);
    
    const tutorialsdiv = this.ownerDocument.createElement("div")
    tutorialsdiv.className = 'tutorialsdiv'

    const PostCards = this.ownerDocument.createElement("tutorials-card") as TutorialsCard;
    tutorialsdiv.appendChild(PostCards)
    this.shadowRoot?.appendChild(tutorialsdiv);
    


    container.appendChild(UpPart);
    container.appendChild(Banner);
    //container.appendChild(section2);
    container.appendChild(tutorialsdiv);
    this.shadowRoot?.appendChild(container);
  }
  
}

customElements.define("my-home", Home);