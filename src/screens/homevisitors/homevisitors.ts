import HomeVisitorsStyle from "./HomeVisitorsStyle.css";

import Categories, { CategoriesAtt } from "../../components/CategoriesButton/CategoriesButton";
import LogoDiv from "../../components/LogoDiv/LogoDiv";
import ButtonSignIn from "../../components/ButtonSignIn/ButtonSignIn";
import ButtonLogin from "../../components/ButtonLogIn/ButtonLogIn";
import BannerDashboard from "../../components/BannerDashboard/BannerDashboard";
import SeeTButton from "../../components/SeeTButton/SeeTButton";
import CreateAButton from "../../components/CreateAButton/CreateAButton";
import CategoriesButton from "../../components/CategoriesButton/CategoriesButton";
import { getCategories } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { setUserCredentials } from "../../store/actions";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import firebase from "../../utils/firebase";
import storage from "../../utils/storage";

export default class HomeVisitors extends HTMLElement  {
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
      css.innerHTML = HomeVisitorsStyle;
      this.shadowRoot?.appendChild(css);   
    }

    const container = this.ownerDocument.createElement("section")
    container.className = 'container'

    const UpPart = this.ownerDocument.createElement("section")
    UpPart.className = 'UpPart'
    
    const logo = this.ownerDocument.createElement("logo-div") as LogoDiv;
    UpPart.appendChild(logo)
    const siginbutton = this.ownerDocument.createElement("button-signin") as ButtonSignIn;
    UpPart.appendChild(siginbutton)
    const loginbutton = this.ownerDocument.createElement("button-login") as ButtonLogin;
    UpPart.appendChild(loginbutton)
    this.shadowRoot?.appendChild(UpPart);

    const Banner = this.ownerDocument.createElement("section")
    Banner.className = 'Banner'
    
    const bannerImage = this.ownerDocument.createElement("banner-dashboard") as BannerDashboard;
    Banner.appendChild(bannerImage)
    const seeButton = this.ownerDocument.createElement("see-tbutton") as SeeTButton;
    Banner.appendChild(seeButton)
    const accountButton = this.ownerDocument.createElement("createa-button") as CreateAButton;
    Banner.appendChild(accountButton)
    this.shadowRoot?.appendChild(Banner);

    const categoriesText = this.ownerDocument.createElement("h2");
    categoriesText.textContent = "Select categories"
    this.shadowRoot?.appendChild(categoriesText);
    const Categoriesdiv = this.ownerDocument.createElement("div")
    Categoriesdiv.className = 'Categoriesdiv'

    const css = this.ownerDocument.createElement("style");
    css.innerHTML = HomeVisitorsStyle;
    this.shadowRoot?.appendChild(css);

     appState.categories.forEach((data) => {
        const CategoriesCard = this.ownerDocument.createElement("my-categories-button") as CategoriesButton;
        CategoriesCard.setAttribute(CategoriesAtt.image, data.image);
        CategoriesCard.setAttribute(CategoriesAtt.name, data.title);
        this.CategoriesList.push(CategoriesCard);
    });

    const section2 = this.ownerDocument.createElement("section")
    section2.className = 'Section2'

    const CategoriesCards = this.ownerDocument.createElement("div")
    CategoriesCards.className = 'CategoriesSection'
    this.CategoriesList.forEach((CategoriesCard) => {
      CategoriesCards.appendChild(CategoriesCard)
    });
    section2.appendChild(CategoriesCards)
    this.shadowRoot?.appendChild(section2);

    const tutorialsText = this.ownerDocument.createElement("h2");
    tutorialsText.textContent = "Select categories"
    this.shadowRoot?.appendChild(tutorialsText);
    const tutorialsdiv = this.ownerDocument.createElement("div")
    tutorialsdiv.className = 'tutorialsdiv'
    
    container.appendChild(UpPart);
    container.appendChild(Banner);
    container.appendChild(Categoriesdiv);
    container.appendChild(section2);
    this.shadowRoot?.appendChild(container);
  }
  
}

customElements.define("my-home-visitors", HomeVisitors);
