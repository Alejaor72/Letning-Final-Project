import HomeVisitorsStyle from "./HomeVisitorsStyle.css";

import Categories, { CategoriesAtt } from "../../components/CategoriesButton/CategoriesButton";
import LogoDiv from "../../components/LogoDiv/LogoDiv";
import ButtonSignIn from "../../components/ButtonSignIn/ButtonSignIn";
import ButtonLogin from "../../components/ButtonLogIn/ButtonLogIn";
import BannerDashboard from "../../components/BannerDashboard/BannerDashboard";
import SeeTButton from "../../components/SeeTButton/SeeTButton";
import CreateAButton from "../../components/CreateAButton/CreateAButton";
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
    logo.appendChild(UpPart)
    const siginbutton = this.ownerDocument.createElement("button-signin") as ButtonSignIn;
    siginbutton.appendChild(UpPart)
    const loginbutton = this.ownerDocument.createElement("button-login") as ButtonLogin;
    loginbutton.appendChild(UpPart)
    this.shadowRoot?.appendChild(UpPart);

    const Banner = this.ownerDocument.createElement("section")
    Banner.className = 'Banner'
    
    const bannerImage = this.ownerDocument.createElement("banner-dashboard") as BannerDashboard;
    bannerImage.appendChild(Banner)
    const seeButton = this.ownerDocument.createElement("see-tbutton") as SeeTButton;
    seeButton.appendChild(Banner)
    const accountButton = this.ownerDocument.createElement("createa-button") as CreateAButton;
    accountButton.appendChild(Banner)
    this.shadowRoot?.appendChild(Banner);

    const usernameText = this.ownerDocument.createElement("h2");
    usernameText.textContent = "Select categories"
    const Categoriesdiv = this.ownerDocument.createElement("div")
    Categoriesdiv.className = 'Categoriesdiv'

    const Categories = this.ownerDocument.createElement("my-categories-button") as CategoriesButton;
    Categories.appendChild(Categoriesdiv)
    this.shadowRoot?.appendChild(Categoriesdiv);
  }
  
}

customElements.define("my-home-visitors", HomeVisitors);
