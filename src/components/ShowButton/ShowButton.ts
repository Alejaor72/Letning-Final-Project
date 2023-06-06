
import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";

import ShowButtonStyle from "./ShowButton.css"
class ShowButton extends HTMLElement {
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
        this.buttont.className = "ShowButton"
        this.buttont.textContent = 'Show your knowledge';
        this.buttont.addEventListener("click", () => {
            dispatch(navigate(Screens.POSTCREATE));
        });
    }

    render() {
        
        this.shadowRoot?.appendChild(this.buttont!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = ShowButtonStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("show-button", ShowButton);
export default ShowButton;