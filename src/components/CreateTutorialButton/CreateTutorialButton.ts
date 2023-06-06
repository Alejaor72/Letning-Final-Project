
import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";

import CreateTutorialButtonStyle from "./CreateTutorialButton.css"
class CreateTutorialButton extends HTMLElement {
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
        this.buttont.className = "CreateTutorialButton"
        this.buttont.textContent = 'Create a tutorial';
        this.buttont.addEventListener("click", () => {
            dispatch(navigate(Screens.POSTCREATE));
        });
    }

    render() {
        
        this.shadowRoot?.appendChild(this.buttont!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = CreateTutorialButtonStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("create-tutorial-button", CreateTutorialButton);
export default CreateTutorialButton;