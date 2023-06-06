
import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";
import { SeeTButton } from "../export";

import BannerHomeStyle from "./BannerHome.css"
class BannerHome extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    constructor() {
        super();
    }

    render() {
        
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
          <div class="Banner">
             <img src="../img/BannerHome.png" alt="" class="image1">
             <div class="Bannertext">
              <h1>Letning is a platform of variety tutorials</h1>
              <p>Learn with people of all kinds, and from anywhere.</p>
            </div>
          </div>
            `;
        }
        
    }
}

customElements.define("banner-home", BannerHome);
export default BannerHome;