
import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";

import SeeTButtonStyle from "./SeeTButton.css"
class SeeTButton extends HTMLElement {
    buttont?: HTMLElement;

    onButtonClicked() {
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.buttont = this.ownerDocument.createElement('button');
        this.buttont.className = "buttonSeeT"
        this.buttont.textContent = 'See the tutorials';
        this.buttont.addEventListener("click", () => {
            dispatch(navigate(Screens.LOGIN));
        });
    }

    render() {
        
        this.shadowRoot?.appendChild(this.buttont!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = SeeTButtonStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("see-tbutton", SeeTButton);
export default SeeTButton;