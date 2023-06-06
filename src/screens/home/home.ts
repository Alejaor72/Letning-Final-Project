import HomeStyle from "./HomeStyle.css";

import Categories, { CategoriesAtt } from "../../components/CategoriesButton/CategoriesButton";
import LogoDiv from "../../components/LogoDiv/LogoDiv";
import ButtonSignIn from "../../components/ButtonSignIn/ButtonSignIn";
import ButtonlogIn from "../../components/ButtonLogIn/ButtonLogIn";
import BannerDashboard from "../../components/ButtonSignIn/ButtonSignIn";

import { getCategories } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";

class Home extends HTMLElement {
  CategoriesList: Categories[] = [];

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
      <link rel="stylesheet" href="./HomeStyle.css">
      `;
  }
  
  if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./HomeStyle.css">
      <div class="Menu">
        <h2>Letning</h2>
         <input class="busqueda"></input>
        <div class="menutext">
         <a href="">Create a tutorial</a>
         <a href="" class="profilephoto">
         <img src="../../img/gatico.jpg" class="perfil"/>
         </a>
         <a>
         <img src="../../img/vector.png" class="message" />
         </a>
        </div>
      </div>
      `;
  }

  if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./HomeStyle.css">   
    <div class="Banner">
       <img src="/img/Component1.jpg" alt="" class="image1">
       <div class="Bannertext">
        <h1>Letning is a platform of variety tutorials</h1>
        <p>Learn with people of all kinds, and from anywhere.</p>
        <div class="Bannerbuttons">
          <button class="button1">Show your knowledge</button>
       </div>
      </div>
    </div>
      `;
  }

  }
}

customElements.define("my-home", Home);
