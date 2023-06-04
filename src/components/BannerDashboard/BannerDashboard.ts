
import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";
import { SeeTButton } from "../export";

import BannerDashboardStyle from "./BannerStyle.css"
class BannerDashboard extends HTMLElement {

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
             <img src="/img/Component1.jpg" alt="" class="image1">
             <div class="Bannertext">
              <h1>Letning is a platform of variety tutorials</h1>
              <p>Learn with people of all kinds, and from anywhere.</p>
            </div>
          </div>
            `;
        }
        
    }
}

customElements.define("banner-dashboard", BannerDashboard);
export default BannerDashboard;