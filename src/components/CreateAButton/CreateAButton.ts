
import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";

import CreateAButtonStyle from "./CreateAButton.css"
class CreateAButton extends HTMLElement {
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
        this.buttont.className = "createA"
        this.buttont.textContent = 'Create an account';
        this.buttont.addEventListener("click", () => {
            dispatch(navigate(Screens.SIGNUP));
        });
    }

    render() {
        
        this.shadowRoot?.appendChild(this.buttont!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = CreateAButtonStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("createa-button", CreateAButton);
export default CreateAButton;