import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";

import LogoStyle from "./Logo.css"
class LogoDiv extends HTMLElement {
    button?: HTMLElement;

    onButtonClicked() {
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this);


        this.button = this.ownerDocument.createElement('button');
        this.button.className = "ButtonLogo"
        this.button.textContent = 'Letning';
        this.button.addEventListener("click", () => {
            dispatch(navigate(Screens.HOME));
          });
    }

    render() {
        
        this.shadowRoot?.appendChild(this.button!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = LogoStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("logo-div", LogoDiv);
export default LogoDiv;