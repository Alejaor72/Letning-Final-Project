
import SaveChangesButtonStyle from "./SaveChangesButton.css"
import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

class SaveChangesButton extends HTMLElement {
    button?: HTMLElement;

    onButtonClicked() {
        
    }

    connectedCallback(){
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.button = this.ownerDocument.createElement('button');
        this.button.className = "SaveChangesButton"
        this.button.textContent = 'Save Changes';
        this.button.addEventListener("click",this.onButtonClicked);
    }

    render() {
        
        this.shadowRoot?.appendChild(this.button!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = SaveChangesButtonStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("save-changes-button", SaveChangesButton);
export default SaveChangesButton;